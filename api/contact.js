const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body;
  
  // Here you would typically send an email or save to a database
  console.log('Contact form submission:', { name, email, company, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will get back to you soon!' 
  });
});

// Newsletter subscription endpoint
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  
  // Here you would typically add to a mailing list
  console.log('Newsletter subscription:', email);
  
  res.json({ 
    success: true, 
    message: 'Successfully subscribed to our newsletter!' 
  });
});

module.exports = app;
