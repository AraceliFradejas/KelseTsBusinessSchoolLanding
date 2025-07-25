import React from 'react';

function TestApp() {
  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div>
        <h1 style={{ color: '#dc2626', marginBottom: '20px' }}>
          🎓 KelceTS Business School
        </h1>
        <p style={{ color: '#374151', fontSize: '18px' }}>
          Test: La aplicación React está funcionando correctamente
        </p>
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
          <p><strong>Estado:</strong> ✅ Aplicación cargada</p>
          <p><strong>Fecha:</strong> {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default TestApp;
