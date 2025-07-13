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
    
    // Map staff IDs to their respective files
    const staffImages = {
      'ceo': 'ktsbs_staff_CEO.png',
      'cio': 'ktsbs_staff_CIO.png', 
      'chro': 'ktsbs_staff_CHRO.png',
      'cco': 'ktsbs_staff_CCO.webp',
      // Also support by initials
      'tas': 'ktsbs_staff_CEO.png',    // T.A.S.
      'tmk': 'ktsbs_staff_CIO.png',    // T.M.K.
      'jdk': 'ktsbs_staff_CHRO.png',   // J.D.K.
      'aks': 'ktsbs_staff_CCO.webp'    // A.K.S.
    };

    const fileName = staffImages[id?.toLowerCase()];
    
    if (!fileName) {
      return res.status(404).json({ 
        error: 'Staff member not found',
        availableIds: Object.keys(staffImages)
      });
    }

    try {
      // Path to the image file
      const imagePath = path.join(process.cwd(), 'public', 'assets', fileName);
      
      // Check if file exists
      if (!fs.existsSync(imagePath)) {
        return res.status(404).json({ error: 'Image file not found' });
      }

      // Read the image file
      const imageBuffer = fs.readFileSync(imagePath);
      
      // Set appropriate content type
      const contentType = fileName.endsWith('.webp') ? 'image/webp' : 'image/png';
      res.setHeader('Content-Type', contentType);
      res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
      
      // Send the image
      res.status(200).send(imageBuffer);
      
    } catch (error) {
      console.error('Error serving staff image:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
