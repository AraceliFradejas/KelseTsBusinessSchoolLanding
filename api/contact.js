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
    const { name, email, company, message } = req.body;
    
    // Here you would typically send an email or save to a database
    console.log('Contact form submission:', { name, email, company, message });
    
    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message. We will get back to you soon!' 
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
