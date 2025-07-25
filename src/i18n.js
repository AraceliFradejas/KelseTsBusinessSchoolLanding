import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        programs: 'Programs',
        about: 'About Us',
        contact: 'Contact',
        language: 'Language'
      },
      // Hero Section
      hero: {
        badge: 'AI Education Leader',
        title: 'Master AI for Business Excellence',
        subtitle: 'Leading Business School specialized in Artificial Intelligence applications for modern enterprises',
        description: 'Transform your career and business with cutting-edge AI education. Join the leaders of tomorrow at KelceTS Business School.',
        ctaPrimary: 'Explore Programs',
        ctaSecondary: 'Watch Full Video',
        videoPlaceholder: '[Hero Video Placeholder - Add your promotional video here]'
      },
      // Features Section
      features: {
        title: 'Why Choose KelceTS Business School?',
        subtitle: 'We specialize exclusively in AI education for business applications',
        expandText: 'Show more',
        collapseText: 'Show less',
        stats: {
          aiTitle: 'AI-Focused',
          support: 'Support',
          countries: 'Countries',
          experience: 'Years Experience'
        },
        items: [
          {
            title: 'AI-Focused Curriculum',
            description: 'Comprehensive programs designed specifically for artificial intelligence applications in business environments.'
          },
          {
            title: 'Industry Experts',
            description: 'Learn from leading AI practitioners and business professionals with real-world experience.'
          },
          {
            title: 'Practical Learning',
            description: 'Hands-on projects and case studies that prepare you for immediate implementation in your business.'
          },
          {
            title: 'Global Network',
            description: 'Connect with AI professionals and business leaders from around the world.'
          }
        ]
      },
      // Programs Section
      programs: {
        title: 'Our AI Business Programs',
        subtitle: 'Specialized education paths designed for different business needs',
        items: [
          {
            title: 'AI Strategy for Executives',
            duration: '6 weeks',
            level: 'Executive',
            description: 'Strategic AI implementation for C-level executives and senior managers.',
            features: ['AI Strategy Development', 'ROI Analysis', 'Change Management', 'Risk Assessment']
          },
          {
            title: 'Machine Learning for Business',
            duration: '12 weeks',
            level: 'Intermediate',
            description: 'Practical machine learning applications for business professionals.',
            features: ['Data Analysis', 'Predictive Models', 'Business Intelligence', 'Automation Tools']
          },
          {
            title: 'AI Innovation Workshop',
            duration: '4 weeks',
            level: 'Beginner',
            description: 'Introduction to AI innovations and their business applications.',
            features: ['AI Fundamentals', 'Use Cases', 'Technology Trends', 'Implementation Planning']
          }
        ],
        cta: 'View All Programs',
        learnMore: 'Learn More',
        comparison: {
          title: 'Program Comparison',
          feature: 'Feature',
          executive: 'Executive',
          intermediate: 'Intermediate',
          beginner: 'Beginner',
          duration: 'Duration',
          weeks6: '6 weeks',
          weeks12: '12 weeks',
          weeks4: '4 weeks',
          prerequisites: 'Prerequisites',
          clevel: 'C-Level',
          basictech: 'Basic Tech',
          none: 'None',
          projects: 'Hands-on Projects',
          certificate: 'Certificate'
        }
      },
      // About Section
      about: {
        badge: 'About KelceTS',
        title: 'About KelceTS Business School',
        subtitle: 'Pioneering AI Education for Business Excellence',
        description: 'Founded with the vision of bridging the gap between artificial intelligence technology and business applications, KelceTS Business School has become the premier destination for professionals seeking to master AI in business contexts.',
        stats: [
          { number: '2K+', label: 'Students Graduated' },
          { number: '50+', label: 'Specialized Courses' },
          { number: '95%', label: 'Success Rate' },
          { number: '4.9/5', label: 'Average Rating' }
        ],
        facts: {
          founded: 'Founded in 2025 with a focus on AI education',
          partnerships: 'Partnerships with leading tech companies',
          alumni: 'Alumni network spanning 50+ countries'
        },
        successRate: {
          label: 'Success Rate'
        },
        rating: {
          label: 'Rating'
        },
        mission: {
          title: 'Our Mission',
          description: 'To bridge the gap between cutting-edge AI technology and practical business applications, empowering professionals and organizations to thrive in the AI-driven future.'
        },
        vision: {
          title: 'Our Vision',
          description: 'To be the global leader in AI business education, creating a world where every professional has the knowledge and skills to leverage artificial intelligence for positive impact.'
        }
      },
      // Team Section
      team: {
        badge: 'Our Team',
        title: 'Meet Our Professional Team',
        description: 'Our experienced leadership team brings decades of expertise in AI, business strategy, and education to drive innovation and excellence.',
        members: {
          ceo: {
            title: 'Chief Executive Officer'
          },
          cio: {
            title: 'Chief Information Officer'
          },
          chro: {
            title: 'Chief Human Resources Officer'
          },
          cco: {
            title: 'Chief Commercial Officer'
          }
        },
        cta: {
          title: 'Ready to Learn from the Best?',
          description: 'Join thousands of professionals who have transformed their careers with our AI education programs.',
          button: 'Get Started Today'
        }
      },
      // Testimonials Section
      testimonials: {
        title: 'What Our Students Say',
        subtitle: 'Success stories from AI business leaders',
        items: [
          {
            name: 'Sarah Johnson',
            role: 'AI Director, TechCorp',
            content: 'The AI Strategy program transformed how we approach technology in our organization. The practical insights were immediately applicable.',
            image: '[Student Image Placeholder 1]'
          },
          {
            name: 'Michael Chen',
            role: 'Data Science Manager, InnovateCo',
            content: 'KelceTS provided the perfect blend of technical knowledge and business acumen. Highly recommended for any professional.',
            image: '[Student Image Placeholder 2]'
          },
          {
            name: 'Maria Rodriguez',
            role: 'CEO, StartupAI',
            content: 'The network and knowledge I gained at KelceTS were instrumental in launching my AI-focused startup.',
            image: '[Student Image Placeholder 3]'
          }
        ]
      },
      // Contact Section
      contact: {
        title: 'Ready to Transform Your Business with AI?',
        subtitle: 'Get in touch with our team to discover how we can help transform your business',
        getInTouch: 'Get in Touch',
        description: 'Ready to transform your business with AI? Our expert team is here to help you understand how our AI solutions can drive growth and innovation in your organization. Contact us to schedule a consultation or learn more about our services.',
        sendMessage: 'Send us a Message',
        businessHours: 'Business Hours',
        mondayFriday: 'Monday - Friday',
        mondayFridayHours: '9:00 AM - 7:00 PM CET',
        saturday: 'Saturday',
        saturdayHours: '10:00 AM - 2:00 PM CET',
        sunday: 'Sunday',
        sundayHours: 'Closed',
        urgentNote: 'For urgent inquiries outside business hours, email us and we\'ll respond within 24 hours.',
        labels: {
          address: 'Address',
          phone: 'Phone',
          email: 'Email'
        },
        form: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          serviceOfInterest: 'Service of Interest',
          selectService: 'Select a service',
          services: {
            aiStrategy: 'AI Strategy Consulting',
            training: 'AI Training Programs',
            implementation: 'AI Implementation',
            automation: 'Business Automation',
            analytics: 'Data Analytics',
            other: 'Other Services'
          },
          message: 'Message',
          messagePlaceholder: 'Tell us about your business needs and how we can help transform your operations with AI...',
          submit: 'Send Message',
          success: 'Message sent successfully! We\'ll contact you soon.',
          error: 'Error sending message. Please try again.'
        },
        info: {
          address: 'Calle de Alcalá, 123, 28009 Madrid, España',
          phone: '+34 91 123 45 67',
          email: 'contacto@kelsetsbs.com'
        }
      },
      // Footer Section
      footer: {
        quickLinks: 'Quick Links',
        contactInfo: 'Contact Info',
        backToTop: 'Back to top',
        description: 'Empowering the future through AI education. Join us to transform your career with the most in-demand skills in the digital economy.',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
        disclaimer: {
          title: 'Educational Disclaimer',
          text: 'KelceTS Business School is a private educational institution specializing in technology and innovation. We are not affiliated with any public higher education institutions in Spain.'
        },
        socialMedia: {
          title: 'Follow Us',
          youtube: 'YouTube',
          twitter: 'X (Twitter)',
          instagram: 'Instagram',
          linkedin: 'LinkedIn',
          facebook: 'Facebook'
        },
        navigation: {
          home: 'Home',
          about: 'About',
          programs: 'Programs',
          team: 'Team',
          contact: 'Contact'
        },
        newsletter: {
          title: 'Stay Updated',
          description: 'Subscribe to our newsletter for the latest updates on AI education and business innovation.',
          placeholder: 'Enter your email',
          button: 'Subscribe'
        },
        copyright: '© 2025 KelceTS Business School. All rights reserved.',
        parentCompany: 'Part of Kelse TS Group'
      }
    }
  },
  es: {
    translation: {
      // Navigation
      nav: {
        home: 'Inicio',
        programs: 'Programas',
        about: 'Acerca de',
        contact: 'Contacto',
        language: 'Idioma'
      },
      // Hero Section
      hero: {
        badge: 'Líder en Educación de IA',
        title: 'Domina la IA para la Excelencia Empresarial',
        subtitle: 'Escuela de Negocios líder especializada en aplicaciones de Inteligencia Artificial para empresas modernas',
        description: 'Transforma tu carrera y negocio con educación de vanguardia en IA. Únete a los líderes del futuro en KelceTS Business School.',
        ctaPrimary: 'Explorar Programas',
        ctaSecondary: 'Ver Video Completo',
        videoPlaceholder: '[Marcador de Video del Hero - Agrega tu video promocional aquí]'
      },
      // Features Section  
      features: {
        title: '¿Por Qué Elegir KelceTS Business School?',
        subtitle: 'Nos especializamos exclusivamente en educación de IA para aplicaciones empresariales',
        expandText: 'Ver más',
        collapseText: 'Ver menos',
        stats: {
          aiTitle: 'Enfoque en IA',
          support: 'Soporte',
          countries: 'Países',
          experience: 'Años de Experiencia'
        },
        items: [
          {
            title: 'Currículum Enfocado en IA',
            description: 'Programas integrales diseñados específicamente para aplicaciones de inteligencia artificial en entornos empresariales.'
          },
          {
            title: 'Expertos de la Industria',
            description: 'Aprende de profesionales líderes en IA y negocios con experiencia del mundo real.'
          },
          {
            title: 'Aprendizaje Práctico',
            description: 'Proyectos prácticos y casos de estudio que te preparan para implementación inmediata en tu negocio.'
          },
          {
            title: 'Red Global',
            description: 'Conéctate con profesionales de IA y líderes empresariales de todo el mundo.'
          }
        ]
      },
      // Programs Section
      programs: {
        title: 'Nuestros Programas de IA para Negocios',
        subtitle: 'Rutas educativas especializadas diseñadas para diferentes necesidades empresariales',
        items: [
          {
            title: 'Estrategia de IA para Ejecutivos',
            duration: '6 semanas',
            level: 'Ejecutivo',
            description: 'Implementación estratégica de IA para ejecutivos de nivel C y gerentes senior.',
            features: ['Desarrollo de Estrategia de IA', 'Análisis de ROI', 'Gestión del Cambio', 'Evaluación de Riesgos']
          },
          {
            title: 'Machine Learning para Negocios',
            duration: '12 semanas',
            level: 'Intermedio',
            description: 'Aplicaciones prácticas de machine learning para profesionales de negocios.',
            features: ['Análisis de Datos', 'Modelos Predictivos', 'Inteligencia de Negocios', 'Herramientas de Automatización']
          },
          {
            title: 'Taller de Innovación en IA',
            duration: '4 semanas',
            level: 'Principiante',
            description: 'Introducción a las innovaciones de IA y sus aplicaciones empresariales.',
            features: ['Fundamentos de IA', 'Casos de Uso', 'Tendencias Tecnológicas', 'Planificación de Implementación']
          }
        ],
        cta: 'Ver Todos los Programas',
        learnMore: 'Conoce Más',
        comparison: {
          title: 'Comparación de Programas',
          feature: 'Característica',
          executive: 'Ejecutivo',
          intermediate: 'Intermedio',
          beginner: 'Principiante',
          duration: 'Duración',
          weeks6: '6 semanas',
          weeks12: '12 semanas',
          weeks4: '4 semanas',
          prerequisites: 'Prerrequisitos',
          clevel: 'Nivel C',
          basictech: 'Tech Básico',
          none: 'Ninguno',
          projects: 'Proyectos Prácticos',
          certificate: 'Certificado'
        }
      },
      // About Section
      about: {
        badge: 'Acerca de KelceTS',
        title: 'Pioneros en Educación de IA para Negocios',
        subtitle: 'Transformando el futuro de la educación empresarial a través de la inteligencia artificial',
        description: 'En KelceTS Business School, combinamos décadas de experiencia empresarial con las últimas innovaciones en IA para ofrecer una educación transformadora que prepara a los líderes del futuro.',
        stats: [
          { number: '2K+', label: 'Estudiantes Graduados' },
          { number: '50+', label: 'Cursos Especializados' },
          { number: '95%', label: 'Tasa de Éxito' },
          { number: '4.9/5', label: 'Calificación Promedio' }
        ],
        facts: {
          founded: 'Fundada en 2025 con enfoque en educación de IA',
          partnerships: 'Alianzas con empresas tecnológicas líderes',
          alumni: 'Red de egresados en más de 50 países'
        },
        successRate: {
          label: 'Tasa de Éxito'
        },
        rating: {
          label: 'Calificación'
        },
        mission: {
          title: 'Nuestra Misión',
          description: 'Cerrar la brecha entre la tecnología de IA de vanguardia y las aplicaciones empresariales prácticas, empoderando a profesionales y organizaciones para prosperar en el futuro impulsado por IA.'
        },
        vision: {
          title: 'Nuestra Visión',
          description: 'Ser el líder global en educación empresarial de IA, creando un mundo donde cada profesional tenga el conocimiento y las habilidades para aprovechar la inteligencia artificial para un impacto positivo.'
        }
      },
      // Team Section
      team: {
        badge: 'Nuestro Equipo',
        title: 'Conoce a Nuestro Equipo Profesional',
        description: 'Nuestro experimentado equipo directivo aporta décadas de experiencia en IA, estrategia empresarial y educación para impulsar la innovación y la excelencia.',
        members: {
          ceo: {
            title: 'Director Ejecutivo'
          },
          cio: {
            title: 'Director de Información'
          },
          chro: {
            title: 'Director de Recursos Humanos'
          },
          cco: {
            title: 'Director Comercial'
          }
        },
        cta: {
          title: '¿Listo para Aprender de los Mejores?',
          description: 'Únete a miles de profesionales que han transformado sus carreras con nuestros programas de educación en IA.',
          button: 'Comienza Hoy'
        }
      },
      // Testimonials Section
      testimonials: {
        title: 'Lo Que Dicen Nuestros Estudiantes',
        subtitle: 'Historias de éxito de líderes empresariales en IA',
        items: [
          {
            name: 'Sarah Johnson',
            role: 'Directora de IA, TechCorp',
            content: 'El programa de Estrategia de IA transformó cómo abordamos la tecnología en nuestra organización. Los insights prácticos fueron inmediatamente aplicables.',
            image: '[Marcador de Imagen de Estudiante 1]'
          },
          {
            name: 'Michael Chen',
            role: 'Gerente de Ciencia de Datos, InnovateCo',
            content: 'KelceTS proporcionó la mezcla perfecta de conocimiento técnico y perspicacia empresarial. Altamente recomendado para cualquier profesional.',
            image: '[Marcador de Imagen de Estudiante 2]'
          },
          {
            name: 'Maria Rodriguez',
            role: 'CEO, StartupAI',
            content: 'La red y el conocimiento que gané en KelceTS fueron fundamentales para lanzar mi startup enfocada en IA.',
            image: '[Marcador de Imagen de Estudiante 3]'
          }
        ]
      },
      // Contact Section
      contact: {
        title: '¿Listo para Transformar tu Negocio con IA?',
        subtitle: 'Ponte en contacto con nuestro equipo para descubrir cómo podemos ayudar a transformar tu negocio',
        getInTouch: 'Ponte en Contacto',
        description: '¿Listo para transformar tu negocio con IA? Nuestro equipo experto está aquí para ayudarte a entender cómo nuestras soluciones de IA pueden impulsar el crecimiento y la innovación en tu organización. Contáctanos para programar una consulta o aprender más sobre nuestros servicios.',
        sendMessage: 'Envíanos un Mensaje',
        businessHours: 'Horario de Atención',
        mondayFriday: 'Lunes - Viernes',
        mondayFridayHours: '9:00 AM - 7:00 PM CET',
        saturday: 'Sábado',
        saturdayHours: '10:00 AM - 2:00 PM CET',
        sunday: 'Domingo',
        sundayHours: 'Cerrado',
        urgentNote: 'Para consultas urgentes fuera del horario de atención, envíanos un email y responderemos en 24 horas.',
        labels: {
          address: 'Dirección',
          phone: 'Teléfono',
          email: 'Email'
        },
        form: {
          name: 'Nombre Completo',
          email: 'Correo Electrónico',
          phone: 'Número de Teléfono',
          serviceOfInterest: 'Servicio de Interés',
          selectService: 'Selecciona un servicio',
          services: {
            aiStrategy: 'Consultoría en Estrategia de IA',
            training: 'Programas de Entrenamiento en IA',
            implementation: 'Implementación de IA',
            automation: 'Automatización de Negocios',
            analytics: 'Análisis de Datos',
            other: 'Otros Servicios'
          },
          message: 'Mensaje',
          messagePlaceholder: 'Cuéntanos sobre las necesidades de tu negocio y cómo podemos ayudarte a transformar tus operaciones con IA...',
          submit: 'Enviar Mensaje',
          success: '¡Mensaje enviado exitosamente! Te contactaremos pronto.',
          error: 'Error enviando mensaje. Por favor intenta de nuevo.'
        },
        info: {
          address: 'Calle de Alcalá, 123, 28009 Madrid, España',
          phone: '+34 91 123 45 67',
          email: 'contacto@kelsetsbs.com'
        }
      },
      // Footer Section
      footer: {
        quickLinks: 'Enlaces Rápidos',
        contactInfo: 'Información de Contacto',
        backToTop: 'Volver arriba',
        description: 'Empoderando el futuro a través de la educación en IA. Únete a nosotros para transformar tu carrera con las habilidades más demandadas en la economía digital.',
        rights: 'Todos los derechos reservados.',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
        contact: 'Contacto',
        disclaimer: {
          title: 'Descargo de Responsabilidad Educativa',
          text: 'KelceTS Business School es una institución educativa privada especializada en tecnología e innovación. No estamos afiliados con ninguna institución pública de educación superior en España.'
        },
        socialMedia: {
          title: 'Síguenos',
          youtube: 'YouTube',
          twitter: 'X (Twitter)',
          instagram: 'Instagram',
          linkedin: 'LinkedIn',
          facebook: 'Facebook'
        },
        navigation: {
          home: 'Inicio',
          about: 'Acerca de',
          programs: 'Programas',
          team: 'Equipo',
          contact: 'Contacto'
        },
        newsletter: {
          title: 'Mantente Actualizado',
          description: 'Suscríbete a nuestro boletín para las últimas actualizaciones sobre educación en IA e innovación empresarial.',
          placeholder: 'Ingresa tu email',
          button: 'Suscribirse'
        },
        copyright: '© 2025 KelceTS Business School. Todos los derechos reservados.',
        parentCompany: 'Parte del Grupo Kelse TS'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;
