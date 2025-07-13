export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const { id } = req.query;
    
    // Map staff IDs to their respective URLs
    const baseUrl = 'https://kelse-ts-business-school-landing.vercel.app';
    
    const staffImages = {
      'ceo': `${baseUrl}/assets/ktsbs_staff_CEO.png`,
      'cio': `${baseUrl}/assets/ktsbs_staff_CIO.png`, 
      'chro': `${baseUrl}/assets/ktsbs_staff_CHRO.png`,
      'cco': `${baseUrl}/assets/ktsbs_staff_CCO.webp`,
      'tas': `${baseUrl}/assets/ktsbs_staff_CEO.png`,
      'tmk': `${baseUrl}/assets/ktsbs_staff_CIO.png`,
      'jdk': `${baseUrl}/assets/ktsbs_staff_CHRO.png`,
      'aks': `${baseUrl}/assets/ktsbs_staff_CCO.webp`
    };

    const imageUrl = staffImages[id?.toLowerCase()];
    
    if (!imageUrl) {
      return res.status(404).json({ 
        error: 'Staff member not found',
        availableIds: Object.keys(staffImages)
      });
    }

    // SVG super simple que debería funcionar
    const svgBadge = `<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
  <circle cx="64" cy="64" r="60" fill="#f3f4f6" stroke="#dc2626" stroke-width="4"/>
  <circle cx="64" cy="64" r="56" fill="url(${imageUrl})" opacity="0.8"/>
  <text x="64" y="120" text-anchor="middle" font-size="10" fill="#374151">${id.toUpperCase()}</text>
</svg>`;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).send(svgBadge);
    
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
