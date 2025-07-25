import React from 'react';

function MinimalApp() {
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#dc2626',
      color: 'white',
      minHeight: '100vh'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>🎓 KelceTS Business School</h1>
        <p style={{ fontSize: '1.2rem' }}>Master AI for Business Excellence</p>
        <p>Leading Business School specialized in Artificial Intelligence</p>
      </div>
      
      <div style={{ backgroundColor: 'white', color: '#333', padding: '30px', borderRadius: '10px' }}>
        <h2>Why Choose KelceTS?</h2>
        <ul>
          <li>AI-Focused Curriculum</li>
          <li>Industry Experts</li>
          <li>Practical Learning</li>
          <li>Global Network</li>
        </ul>
        
        <h2>Programs</h2>
        <div>
          <h3>🎯 AI Strategy for Executives - 6 weeks</h3>
          <h3>📊 Machine Learning for Business - 12 weeks</h3>
          <h3>💡 AI Innovation Workshop - 4 weeks</h3>
        </div>
        
        <h2>Contact</h2>
        <p>📍 1 Arrowhead Drive, Kansas City, MO 64129</p>
        <p>📞 +1 (816) 920-9300</p>
        <p>✉️ info@kelsects.edu</p>
        
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button style={{
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '15px 30px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Get Started Today
          </button>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
        <p>© 2025 KelceTS Business School - Working Version ✅</p>
        <p>This institution is not accredited by any recognized accrediting agency.</p>
      </div>
    </div>
  );
}

export default MinimalApp;
