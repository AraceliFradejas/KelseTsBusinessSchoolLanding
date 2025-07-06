export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { email } = req.body;
    
    // Here you would typically add to a mailing list
    console.log('Newsletter subscription:', email);
    
    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to our newsletter!' 
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
