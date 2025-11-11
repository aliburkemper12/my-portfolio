import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

function ContactLink({ icon, label, value, href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.5rem 2rem',
        background: isHovered 
          ? 'rgba(255, 107, 53, 0.2)' 
          : 'rgba(22, 33, 62, 0.6)',
        backdropFilter: 'blur(10px)',
        border: isHovered 
          ? '2px solid #ff6b35' 
          : '2px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateX(10px)' : 'translateX(0)',
      }}
    >
      <div style={{
        fontSize: '2rem',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
        borderRadius: '12px',
        flexShrink: 0,
      }}>
        {icon}
      </div>
      
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: '0.9rem',
          color: '#a08e7a',
          marginBottom: '0.25rem',
          fontWeight: 500,
        }}>
          {label}
        </div>
        <div style={{
          fontSize: '1.1rem',
          color: isHovered ? '#ff6b35' : '#e8d5b7',
          fontWeight: 600,
          transition: 'color 0.3s',
        }}>
          {value}
        </div>
      </div>
      
      <div style={{
        fontSize: '1.5rem',
        color: '#ff6b35',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }}>
        →
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0f3460 0%, #1a0a2e 100%)',
      padding: '6rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffd93d 0%, #ff6b35 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Get In Touch
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#e8d5b7',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Here is where you can find me!
          </p>
        </div>

        {/* Contact Links */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
        <AnimatedSection delay={0}>
          <ContactLink
            icon="📧"
            label="Email"
            value="aliburkemper12@gmail.com"
            href="mailto:aliburkemper12@gmail.com"
          />
        </AnimatedSection>
          
        <AnimatedSection delay={0.1}>
          <ContactLink
            icon="📱"
            label="Phone"
            value="+1 (636) 445-0732"
            href="tel:+16364450732"
          />
        </AnimatedSection>
          
        <AnimatedSection delay={0.2}>
          <ContactLink
            icon="💻"
            label="GitHub"
            value="https://github.com/aliburkemper12"
            href="https://github.com/aliburkemper12"
          />
        </AnimatedSection>
          
        <AnimatedSection delay={0.3}>
          <ContactLink
            icon="💼"
            label="LinkedIn"
            value="https://www.linkedin.com/in/ali-burkemper/"
            href="https://www.linkedin.com/in/ali-burkemper/"
          />
        </AnimatedSection>
        </div>

        {/* Footer Text */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <p style={{
            color: '#a08e7a',
            fontSize: '0.95rem',
          }}>
            © 2025 Ali Burkemper. Built with React & Three.js
          </p>
        </div>
      </div>
    </section>
  );
}