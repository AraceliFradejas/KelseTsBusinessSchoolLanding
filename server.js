import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'KelceTS Business School API is running' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message, language } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, message, language });
  
  res.json({ 
    success: true, 
    message: language === 'es' 
      ? 'Mensaje enviado correctamente. Te contactaremos pronto.' 
      : 'Message sent successfully. We will contact you soon.' 
  });
});

// Newsletter subscription
app.post('/api/newsletter', (req, res) => {
  const { email, language } = req.body;
  
  // Here you would typically save to database
  console.log('Newsletter subscription:', { email, language });
  
  res.json({ 
    success: true, 
    message: language === 'es' 
      ? 'Suscripción exitosa al newsletter.' 
      : 'Successfully subscribed to newsletter.' 
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
