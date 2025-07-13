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
    const baseUrl = 'https://kelse-ts-business-school-landing.vercel.app';
    
    const staffMembers = [
      {
        id: 'ceo',
        initials: 'T.A.S.',
        fullName: 'Taylor Alison Swift',
        position: 'Chief Executive Officer',
        positionEs: 'Director Ejecutivo',
        imageUrl: `${baseUrl}/api/staff/ceo`,
        directAssetUrl: `${baseUrl}/assets/ktsbs_staff_CEO.png`
      },
      {
        id: 'cio',
        initials: 'T.M.K.',
        fullName: 'Travis Michael Kelce',
        position: 'Chief Information Officer',
        positionEs: 'Director de Información',
        imageUrl: `${baseUrl}/api/staff/cio`,
        directAssetUrl: `${baseUrl}/assets/ktsbs_staff_CIO.png`
      },
      {
        id: 'chro',
        initials: 'J.D.K.',
        fullName: 'Jason Daniel Kelse',
        position: 'Chief Human Resources Officer',
        positionEs: 'Director de Recursos Humanos',
        imageUrl: `${baseUrl}/api/staff/chro`,
        directAssetUrl: `${baseUrl}/assets/ktsbs_staff_CHRO.png`
      },
      {
        id: 'cco',
        initials: 'A.K.S.',
        fullName: 'Austin Kingsley Swift',
        position: 'Chief Commercial Officer',
        positionEs: 'Director Comercial',
        imageUrl: `${baseUrl}/api/staff/cco`,
        directAssetUrl: `${baseUrl}/assets/ktsbs_staff_CCO.webp`
      }
    ];

    res.status(200).json({
      success: true,
      data: staffMembers,
      totalMembers: staffMembers.length,
      endpoints: {
        individual: `${baseUrl}/api/staff/[id]`,
        availableIds: ['ceo', 'cio', 'chro', 'cco', 'tas', 'tmk', 'jdk', 'aks']
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
