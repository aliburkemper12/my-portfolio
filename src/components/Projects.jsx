import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { forwardRef } from 'react';


// Tech stack icons component
function TechIcon({ name, color }) {
  const icons = {
    React: '⚛️',
    JavaScript: '🟨',
    TypeScript: '🔷',
    Python: '🐍',
    'Node.js': '🟢',
    HTML: '🔶',
    CSS: '🎨',
    'Three.js': '🎲',
    MongoDB: '🍃',
    Firebase: '🔥',
    Tailwind: '💨',
    'Next.js': '▲',
    Vue: '💚',
    Express: '🚂',
    PostgreSQL: '🐘',
    Docker: '🐳',
    Git: '📦',
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',
      padding: '0.4rem 0.8rem',
      background: `${color}20`,
      border: `1px solid ${color}`,
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: 600,
      color: color,
    }}>
      <span style={{ fontSize: '1.1rem' }}>{icons[name] || '💻'}</span>
      <span>{name}</span>
    </div>
  );
}

// Individual project card component
function ProjectCard({ title, description, image, techStack, githubUrl, demoUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'rgba(22, 33, 62, 0.6)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(255, 107, 53, 0.3)' 
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Project Screenshot */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '250px',
        overflow: 'hidden',
        background: '#0f3460',
      }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        
        {/* Overlay on hover */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 1.5rem',
                background: '#ff6b35',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: 600,
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              GitHub →
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 1.5rem',
                background: '#8b5cf6',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: 600,
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '0.75rem',
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#e8d5b7',
          marginBottom: '1.25rem',
        }}>
          {description}
        </p>

        {/* Tech Stack */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          {techStack.map((tech, index) => (
            <TechIcon key={index} name={tech.name} color={tech.color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, interactive portfolio showcasing my work with stunning 3D animations and smooth transitions.',
      image: 'src/assets/portfolio-ss.png',
      techStack: [
        { name: 'React', color: '#61dafb' },
        { name: 'Three.js', color: '#049ef4' },
        { name: 'JavaScript', color: '#f7df1e' },
      ],
      githubUrl: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'Movie Rating Prediction & Analysis',
      description: 'Data science project exploring web scraping, feature engineering, and machine learning to predict and analyze movie ratings from Rotten Tomatoes.',
      image: 'src/assets/data-ss.png',
      techStack: [
        { name: 'Python', color: '#61dafb' },
        { name: 'Pandas', color: '#3178c6' },
        { name: 'Scikit-learn', color: '#f7df1e' },
        { name: 'BeautifulSoup', color: '#264de4' },
        { name: 'Matplotlib', color: '#ff6b35' },
        { name: 'Seaborn', color: '#6c5ce7' },
      ],
    },
    {
      title: 'Texture Mapping in WebGL',
      description: 'Interactive 3D application demonstrating texture mapping techniques using WebGL.',
      image: 'src/assets/texture-ss.png',
      techStack: [
        { name: 'JavaScript', color: '#f7df1e' },
        { name: 'WebGL', color: '#29b6f6' },
        { name: 'HTML', color: '#e34c26' },
      ],
      githubUrl: 'https://github.com/aliburkemper12/Textures-WebGL',
    },
    {
      title: 'AI Movie Database Web App',
      description: 'A web application that leverages AI to provide movie reviews and actor sentiments.',
      image: 'src/assets/cinfiler-ss.png',
      techStack: [
        { name: 'ASP.NET', color: '#512bd4' },
        { name: 'C#', color: '#178600' },
        { name: 'JavaScript', color: '#f7df1e' },
        { name: 'SQL Server', color: '#cc2927' },
        { name: 'HTML', color: '#e34c26' },
        { name: 'CSS', color: '#264de4' },
        { name: 'Azure', color: '#0078d4' },
        { name: 'OpenAI', color: '#10a37f' },
      ],
      githubUrl: 'https://github.com/aliburkemper12/Fall2025-Project3-aeburkemper?tab=readme-ov-file',
      demoUrl: 'https://fall2025-project3-aeburkemper-appservice.azurewebsites.net/',
    },
    {
    title: 'Inventory Management System',
    description: 'A comprehensive inventory management system designed to streamline stock tracking for small businesses.',
    image: 'src/assets/inventory-ss.png',
    techStack: [
        { name: 'Python', color: '#3178c6' },
        { name: 'Flask', color: '#000000' },
        { name: 'SQLite', color: '#003b57' },
        { name: 'HTML', color: '#e34c26' },
        { name: 'CSS', color: '#264de4' },
        { name: 'JavaScript', color: '#f7df1e' },
        { name: 'Ajax', color: '#ff6b35' },
    ],
    githubUrl: 'https://github.com/aliburkemper12/inventory-system-piston',
    },
  ];

  return (
    <AnimatedSection delay={0}>
    <section id="projects" style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #16213e 0%, #0f3460 100%)',
      padding: '6rem 2rem',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
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
            background: 'linear-gradient(135deg, #ff6b35 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            My Projects
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#e8d5b7',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}