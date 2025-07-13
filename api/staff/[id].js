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
    // SVG chapita con imagen real como background
    const size = 128;
    const borderWidth = 4;
    
    const svgBadge = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="circleClip">
      <circle cx="${size/2}" cy="${size/2}" r="${(size/2) - borderWidth}"/>
    </clipPath>
    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#dc2626;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background circle -->
  <circle cx="${size/2}" cy="${size/2}" r="${(size/2) - borderWidth}" fill="#f3f4f6"/>
  
  <!-- Image -->
  <image href="${imageUrl}" x="${borderWidth}" y="${borderWidth}" width="${size - borderWidth*2}" height="${size - borderWidth*2}" clip-path="url(#circleClip)" preserveAspectRatio="xMidYMid slice" />
  
  <!-- Border -->
  <circle cx="${size/2}" cy="${size/2}" r="${(size/2) - borderWidth/2}" fill="none" stroke="url(#borderGradient)" stroke-width="${borderWidth}"/>
</svg>`;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(svgBadge);
    
  } catch (error) {
    console.error('Error generating badge:', error);
    res.status(500).json({ error: 'Error generating badge image' });
  }
}
