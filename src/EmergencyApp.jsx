import React from 'react';

function EmergencyApp() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #dc2626 0%, #f59e0b 100%)'
    }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'rgba(255,255,255,0.95)', 
        padding: '1rem 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '0 2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img 
              src="/favicon.png" 
              alt="KelceTS Logo" 
              style={{ width: '40px', height: '40px' }}
            />
            <div>
              <h1 style={{ margin: 0, color: '#dc2626', fontSize: '1.5rem' }}>KelceTS Business School</h1>
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>AI Education for Business Excellence</p>
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#home" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Home</a>
            <a href="#programs" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Programs</a>
            <a href="#about" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>About</a>
            <a href="#contact" style={{ color: '#333', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" style={{ 
        padding: '4rem 2rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '1rem', 
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Master AI for Business Excellence
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            textShadow: '0 1px 5px rgba(0,0,0,0.3)'
          }}>
            Leading Business School specialized in Artificial Intelligence applications for modern enterprises
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <a 
              href="#programs"
              style={{
                backgroundColor: 'white',
                color: '#dc2626',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Explore Programs →
            </a>
            <a 
              href="#contact"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                border: '2px solid white'
              }}
            >
              Watch Video ▶
            </a>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '2rem',
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '16px'
          }}>
            <div>
              <h3 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0' }}>500+</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Graduates</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0' }}>15+</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Partners</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0' }}>95%</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Success Rate</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0' }}>24/7</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" style={{ 
        backgroundColor: 'white', 
        padding: '4rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '2.5rem', 
            marginBottom: '3rem',
            color: '#333'
          }}>
            Our AI Business Programs
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem'
          }}>
            <div style={{ 
              padding: '2rem', 
              borderRadius: '12px', 
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              border: '3px solid #dc2626'
            }}>
              <div style={{ 
                backgroundColor: '#dc2626', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                EXECUTIVE
              </div>
              <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>AI Strategy for Executives</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>6 weeks</p>
              <p style={{ marginBottom: '2rem' }}>Strategic AI implementation for C-level executives and senior managers.</p>
              <a 
                href="#contact"
                style={{
                  backgroundColor: '#dc2626',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Learn More
              </a>
            </div>
            
            <div style={{ 
              padding: '2rem', 
              borderRadius: '12px', 
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              border: '3px solid #f59e0b'
            }}>
              <div style={{ 
                backgroundColor: '#f59e0b', 
                color: '#dc2626', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                INTERMEDIATE
              </div>
              <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>Machine Learning for Business</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>12 weeks</p>
              <p style={{ marginBottom: '2rem' }}>Practical machine learning applications for business professionals.</p>
              <a 
                href="#contact"
                style={{
                  backgroundColor: '#f59e0b',
                  color: '#dc2626',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: 'bold'
                }}
              >
                Learn More
              </a>
            </div>
            
            <div style={{ 
              padding: '2rem', 
              borderRadius: '12px', 
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              border: '3px solid #dc2626'
            }}>
              <div style={{ 
                backgroundColor: '#f59e0b', 
                color: '#dc2626', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                display: 'inline-block',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                BEGINNER
              </div>
              <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>AI Innovation Workshop</h3>
              <p style={{ color: '#666', marginBottom: '1rem' }}>4 weeks</p>
              <p style={{ marginBottom: '2rem' }}>Introduction to AI innovations and their business applications.</p>
              <a 
                href="#contact"
                style={{
                  backgroundColor: '#dc2626',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '4rem 2rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '2rem',
            color: '#333'
          }}>
            Ready to Transform Your Business with AI?
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '3rem',
            color: '#666'
          }}>
            Get in touch with our admissions team
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 3px 15px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>📍 Address</h3>
              <p>Arrowhead Stadium<br />1 Arrowhead Dr<br />Kansas City, MO 64129<br />Estados Unidos</p>
            </div>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '12px',
              boxShadow: '0 3px 15px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>📞 Contact</h3>
              <p>Phone: +1 (816) 920-9300<br />Email: info@kelscts.edu</p>
            </div>
          </div>
          
          <a 
            href="mailto:info@kelscts.edu"
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              display: 'inline-block',
              boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)'
            }}
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#1a1a1a', 
        color: 'white', 
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '1rem' }}>© 2025 KelceTS Business School. All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', color: '#999' }}>
          Leading the future of AI education for business professionals worldwide.
        </p>
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '1rem' }}>
          Part of Kelse TS Group
        </p>
      </footer>
    </div>
  );
}

export default EmergencyApp;
