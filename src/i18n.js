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
        title: 'Master AI for Business Excellence',
        subtitle: 'Leading Business School specialized in Artificial Intelligence applications for modern enterprises',
        description: 'Transform your career and business with cutting-edge AI education. Join the leaders of tomorrow at KelceTS Business School.',
        ctaPrimary: 'Explore Programs',
        ctaSecondary: 'Watch Video',
        videoPlaceholder: '[Hero Video Placeholder - Add your promotional video here]'
      },
      // Features Section
      features: {
        title: 'Why Choose KelceTS Business School?',
        subtitle: 'We specialize exclusively in AI education for business applications',
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
        cta: 'View All Programs'
      },
      // About Section
      about: {
        title: 'About KelceTS Business School',
        subtitle: 'Pioneering AI Education for Business Excellence',
        description: 'Founded with the vision of bridging the gap between artificial intelligence technology and business applications, KelceTS Business School has become the premier destination for professionals seeking to master AI in business contexts.',
        stats: [
          { number: '500+', label: 'Graduates' },
          { number: '15+', label: 'Industry Partners' },
          { number: '95%', label: 'Job Placement Rate' },
          { number: '4.9/5', label: 'Student Rating' }
        ],
        imagePlaceholder: '[About Image Placeholder - Add team or campus image here]'
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
        subtitle: 'Get in touch with our admissions team',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          program: 'Program of Interest',
          message: 'Message',
          submit: 'Send Message',
          success: 'Message sent successfully! We will contact you soon.',
          error: 'Error sending message. Please try again.'
        },
        info: {
          address: '123 AI Innovation Drive, Tech District, NY 10001',
          phone: '+1 (555) 123-4567',
          email: 'admissions@kelscts.edu'
        }
      },
      // Footer
      footer: {
        description: 'Leading the future of AI education for business professionals worldwide.',
        links: {
          programs: 'Programs',
          admissions: 'Admissions',
          careers: 'Careers',
          news: 'News',
          privacy: 'Privacy Policy',
          terms: 'Terms of Service'
        },
        social: {
          linkedin: 'LinkedIn',
          twitter: 'Twitter',
          youtube: 'YouTube',
          instagram: 'Instagram'
        },
        newsletter: {
          title: 'Stay Updated',
          description: 'Subscribe to our newsletter for the latest AI business insights',
          placeholder: 'Enter your email',
          button: 'Subscribe'
        },
        copyright: '© 2025 KelceTS Business School. All rights reserved.',
        parentCompany: 'Part of Kelset Group'
      }
    }
  },
  es: {
    translation: {
      // Navigation
      nav: {
        home: 'Inicio',
        programs: 'Programas',
        about: 'Nosotros',
        contact: 'Contacto',
        language: 'Idioma'
      },
      // Hero Section
      hero: {
        title: 'Domina la IA para la Excelencia Empresarial',
        subtitle: 'Escuela de Negocios líder especializada en aplicaciones de Inteligencia Artificial para empresas modernas',
        description: 'Transforma tu carrera y negocio con educación de vanguardia en IA. Únete a los líderes del mañana en KelceTS Business School.',
        ctaPrimary: 'Explorar Programas',
        ctaSecondary: 'Ver Video',
        videoPlaceholder: '[Video Hero Placeholder - Agrega tu video promocional aquí]'
      },
      // Features Section
      features: {
        title: '¿Por qué elegir KelceTS Business School?',
        subtitle: 'Nos especializamos exclusivamente en educación de IA para aplicaciones empresariales',
        items: [
          {
            title: 'Currículo Enfocado en IA',
            description: 'Programas integrales diseñados específicamente para aplicaciones de inteligencia artificial en entornos empresariales.'
          },
          {
            title: 'Expertos de la Industria',
            description: 'Aprende de los principales profesionales de IA y expertos en negocios con experiencia del mundo real.'
          },
          {
            title: 'Aprendizaje Práctico',
            description: 'Proyectos prácticos y casos de estudio que te preparan para la implementación inmediata en tu negocio.'
          },
          {
            title: 'Red Global',
            description: 'Conecta con profesionales de IA y líderes empresariales de todo el mundo.'
          }
        ]
      },
      // Programs Section
      programs: {
        title: 'Nuestros Programas de IA Empresarial',
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
            description: 'Aplicaciones prácticas de machine learning para profesionales empresariales.',
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
        cta: 'Ver Todos los Programas'
      },
      // About Section
      about: {
        title: 'Acerca de KelceTS Business School',
        subtitle: 'Pioneros en Educación de IA para la Excelencia Empresarial',
        description: 'Fundada con la visión de cerrar la brecha entre la tecnología de inteligencia artificial y las aplicaciones empresariales, KelceTS Business School se ha convertido en el destino principal para profesionales que buscan dominar la IA en contextos empresariales.',
        stats: [
          { number: '500+', label: 'Graduados' },
          { number: '15+', label: 'Socios de la Industria' },
          { number: '95%', label: 'Tasa de Colocación Laboral' },
          { number: '4.9/5', label: 'Calificación Estudiantil' }
        ],
        imagePlaceholder: '[Imagen Acerca Placeholder - Agrega imagen del equipo o campus aquí]'
      },
      // Testimonials Section
      testimonials: {
        title: 'Lo que Dicen Nuestros Estudiantes',
        subtitle: 'Historias de éxito de líderes empresariales en IA',
        items: [
          {
            name: 'Sarah Johnson',
            role: 'Directora de IA, TechCorp',
            content: 'El programa de Estrategia de IA transformó cómo abordamos la tecnología en nuestra organización. Los insights prácticos fueron inmediatamente aplicables.',
            image: '[Imagen Estudiante Placeholder 1]'
          },
          {
            name: 'Michael Chen',
            role: 'Gerente de Ciencia de Datos, InnovateCo',
            content: 'KelceTS proporcionó la combinación perfecta de conocimiento técnico y perspicacia empresarial. Altamente recomendado para cualquier profesional.',
            image: '[Imagen Estudiante Placeholder 2]'
          },
          {
            name: 'María Rodriguez',
            role: 'CEO, StartupAI',
            content: 'La red y el conocimiento que obtuve en KelceTS fueron fundamentales para lanzar mi startup enfocada en IA.',
            image: '[Imagen Estudiante Placeholder 3]'
          }
        ]
      },
      // Contact Section
      contact: {
        title: '¿Listo para Transformar tu Negocio con IA?',
        subtitle: 'Ponte en contacto con nuestro equipo de admisiones',
        form: {
          name: 'Nombre Completo',
          email: 'Correo Electrónico',
          phone: 'Número de Teléfono',
          program: 'Programa de Interés',
          message: 'Mensaje',
          submit: 'Enviar Mensaje',
          success: '¡Mensaje enviado exitosamente! Te contactaremos pronto.',
          error: 'Error enviando mensaje. Por favor intenta de nuevo.'
        },
        info: {
          address: '123 AI Innovation Drive, Distrito Tecnológico, NY 10001',
          phone: '+1 (555) 123-4567',
          email: 'admisiones@kelscts.edu'
        }
      },
      // Footer
      footer: {
        description: 'Liderando el futuro de la educación en IA para profesionales empresariales en todo el mundo.',
        links: {
          programs: 'Programas',
          admissions: 'Admisiones',
          careers: 'Carreras',
          news: 'Noticias',
          privacy: 'Política de Privacidad',
          terms: 'Términos de Servicio'
        },
        social: {
          linkedin: 'LinkedIn',
          twitter: 'Twitter',
          youtube: 'YouTube',
          instagram: 'Instagram'
        },
        newsletter: {
          title: 'Mantente Actualizado',
          description: 'Suscríbete a nuestro newsletter para las últimas perspectivas de IA empresarial',
          placeholder: 'Ingresa tu email',
          button: 'Suscribirse'
        },
        copyright: '© 2025 KelceTS Business School. Todos los derechos reservados.',
        parentCompany: 'Parte del Grupo Kelset'
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
