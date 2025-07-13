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
    const { id } = req.query;
    
    // Staff member info with names and positions
    const staffMembers = {
      'ceo': { initials: 'T.A.S.', name: 'Taylor Alison Swift', position: 'CEO' },
      'cio': { initials: 'T.M.K.', name: 'Travis Michael Kelce', position: 'CIO' },
      'chro': { initials: 'J.D.K.', name: 'Jason Daniel Kelse', position: 'CHRO' },
      'cco': { initials: 'A.K.S.', name: 'Austin Kingsley Swift', position: 'CCO' },
      // Also support by initials
      'tas': { initials: 'T.A.S.', name: 'Taylor Alison Swift', position: 'CEO' },
      'tmk': { initials: 'T.M.K.', name: 'Travis Michael Kelce', position: 'CIO' },
      'jdk': { initials: 'J.D.K.', name: 'Jason Daniel Kelse', position: 'CHRO' },
      'aks': { initials: 'A.K.S.', name: 'Austin Kingsley Swift', position: 'CCO' }
    };

    const member = staffMembers[id?.toLowerCase()];
    
    if (!member) {
      return res.status(404).json({ 
        error: 'Staff member not found',
        availableIds: Object.keys(staffMembers),
        message: 'Use: /api/staff-badge/ceo or /api/staff-badge/tas'
      });
    }

    // Generate professional badge
    const size = 200;
    const borderWidth = 6;
    const innerSize = size - (borderWidth * 2);
    
    const badgeSVG = `
      <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#dc2626;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#f59e0b;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#dc2626;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="backgroundGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" flood-color="#0000001a"/>
          </filter>
        </defs>
        
        <!-- Main circle with shadow -->
        <circle cx="${size/2}" cy="${size/2}" r="${(size/2) - 2}" 
                fill="url(#backgroundGrad)" 
                stroke="url(#borderGrad)" 
                stroke-width="${borderWidth}"
                filter="url(#shadow)"/>
        
        <!-- Inner professional area -->
        <circle cx="${size/2}" cy="${size/2}" r="${innerSize/2 - 10}" 
                fill="#ffffff" opacity="0.9"/>
        
        <!-- Initials in center -->
        <text x="${size/2}" y="${size/2 - 10}" text-anchor="middle" 
              font-family="'Inter', 'Segoe UI', system-ui, sans-serif" 
              font-size="32" font-weight="700" fill="#1f2937">
          ${member.initials}
        </text>
        
        <!-- Position title -->
        <text x="${size/2}" y="${size/2 + 15}" text-anchor="middle" 
              font-family="'Inter', 'Segoe UI', system-ui, sans-serif" 
              font-size="12" font-weight="600" fill="#6b7280">
          ${member.position}
        </text>
        
        <!-- Company badge at bottom -->
        <rect x="${size/2 - 35}" y="${size - 25}" width="70" height="16" 
              rx="8" fill="#dc2626"/>
        <text x="${size/2}" y="${size - 15}" text-anchor="middle" 
              font-family="'Inter', 'Segoe UI', system-ui, sans-serif" 
              font-size="8" font-weight="600" fill="#ffffff">
          KELSECTS
        </text>
        
        <!-- Decorative elements -->
        <circle cx="${size/2 - 45}" cy="${size/2 - 45}" r="3" fill="#f59e0b" opacity="0.6"/>
        <circle cx="${size/2 + 45}" cy="${size/2 - 45}" r="3" fill="#dc2626" opacity="0.6"/>
        <circle cx="${size/2 - 45}" cy="${size/2 + 45}" r="3" fill="#dc2626" opacity="0.6"/>
        <circle cx="${size/2 + 45}" cy="${size/2 + 45}" r="3" fill="#f59e0b" opacity="0.6"/>
      </svg>
    `;

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 1 day
    res.status(200).send(badgeSVG);
    
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
