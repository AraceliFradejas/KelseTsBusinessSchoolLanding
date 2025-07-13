export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const { id, style } = req.query;
    
    // Map staff IDs to their respective URLs
    const baseUrl = 'https://kelse-ts-business-school-landing.vercel.app';
    
    const staffImages = {
      'ceo': `${baseUrl}/assets/ktsbs_staff_CEO.png`,
      'cio': `${baseUrl}/assets/ktsbs_staff_CIO.png`, 
      'chro': `${baseUrl}/assets/ktsbs_staff_CHRO.png`,
      'cco': `${baseUrl}/assets/ktsbs_staff_CCO.webp`,
      // Also support by initials
      'tas': `${baseUrl}/assets/ktsbs_staff_CEO.png`,    // T.A.S.
      'tmk': `${baseUrl}/assets/ktsbs_staff_CIO.png`,    // T.M.K.
      'jdk': `${baseUrl}/assets/ktsbs_staff_CHRO.png`,   // J.D.K.
      'aks': `${baseUrl}/assets/ktsbs_staff_CCO.webp`    // A.K.S.
    };

    const imageUrl = staffImages[id?.toLowerCase()];
    
    if (!imageUrl) {
      return res.status(404).json({ 
        error: 'Staff member not found',
        availableIds: Object.keys(staffImages),
        message: `Try: ${baseUrl}/api/staff/ceo or ${baseUrl}/api/staff/ceo?style=badge`
      });
    }

    // If style=badge is requested, generate circular badge version
    if (style === 'badge' || style === 'chapita') {
      return generateBadgeImage(imageUrl, res);
    }

    // Default: redirect to the actual image URL
    res.redirect(302, imageUrl);
    
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

async function generateBadgeImage(imageUrl, res) {
  try {
    // Crear una chapita simple con CSS embebido que funcione en todos los navegadores
    const size = 128;
    const borderWidth = 4;
    
    // Crear HTML con CSS que se puede convertir a imagen
    const htmlBadge = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
    .badge {
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      border: ${borderWidth}px solid;
      border-image: linear-gradient(45deg, #dc2626, #f59e0b) 1;
      background-image: url('${imageUrl}');
      background-size: cover;
      background-position: center 20%;
      background-repeat: no-repeat;
      position: relative;
      overflow: hidden;
    }
    .badge::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      background: linear-gradient(45deg, rgba(220, 38, 38, 0.1), rgba(245, 158, 11, 0.1));
    }
  </style>
</head>
<body>
  <div class="badge"></div>
</body>
</html>`;

    // En lugar de HTML, vamos a usar un SVG más simple
    const svgBadge = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="img" patternUnits="userSpaceOnUse" width="${size-8}" height="${size-8}">
      <image href="${imageUrl}" x="0" y="-10" width="${size-8}" height="${size-8}" preserveAspectRatio="xMidYMid slice"/>
    </pattern>
  </defs>
  <circle cx="${size/2}" cy="${size/2}" r="${(size/2)-4}" fill="url(#img)"/>
  <circle cx="${size/2}" cy="${size/2}" r="${(size/2)-2}" fill="none" stroke="#dc2626" stroke-width="4"/>
</svg>`;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(svgBadge);
    
  } catch (error) {
    console.error('Error generating badge:', error);
    // Fallback: devolver un SVG simple sin imagen
    const fallbackSvg = `<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle cx="64" cy="64" r="60" fill="#f3f4f6" stroke="#dc2626" stroke-width="4"/>
  <text x="64" y="70" text-anchor="middle" font-family="Arial" font-size="14" fill="#374151">Staff</text>
</svg>`;
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(fallbackSvg);
  }
}
