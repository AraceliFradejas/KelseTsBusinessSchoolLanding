import fs from 'fs';
import path from 'path';

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
    
    // Map staff IDs to their respective URLs (redirect to actual assets)
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
        message: `Try: ${baseUrl}/api/staff/ceo`
      });
    }

    // Redirect to the actual image URL
    res.redirect(302, imageUrl);
    
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
