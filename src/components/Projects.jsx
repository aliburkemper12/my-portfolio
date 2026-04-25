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
function ProjectCard({ title, description, image, techStack, githubUrl, demoUrl, reportUrl }) {
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
          {reportUrl && (
            <a
              href={reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.75rem 1.5rem',
                background: '#10b981',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: 600,
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Report →
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
      title: 'LLM-Powered Movie Recommender (Gemma + KNN)',
      description: 'Built in team of 3 for Data Science class - Natural-language movie search for streaming aggregators: Gemma 2 extracts genres/cast/themes from free-form queries, then a weighted TF-IDF + multi-hot feature space retrieves nearest neighbors from TMDb/IMDb data. Includes a Gradio UI and evaluation suite.',
      image: 'assets/LLM_movie.png',
      techStack: [
        { name: 'Python', color: '#3776ab' },
        { name: 'Scikit-learn', color: '#f7931e' },
        { name: 'Transformers', color: '#ffcc00' },
        { name: 'Hugging Face', color: '#ffd21e' },
        { name: 'Gradio', color: '#ff4b4b' },
        { name: 'TMDb', color: '#01b4e4' },
        { name: 'IMDb', color: '#f5c518' },
      ],
      demoUrl: 'https://colab.research.google.com/drive/1ARtxlpBuvwnAVgU4P5VMAnUt0B0LJ_ba?usp=sharing',
      reportUrl: 'assets/DatascienceFinalReport.docx',
    },
    {
      title: 'EEG-Based Error Potentials Research Framework',
      description: 'Capstone Project built in team of 5 - Low-cost end-to-end ErrP framework built with OpenBCI Ganglion and a native desktop visualizer. Includes a built-in Flanker Task streaming EEG at 200Hz with automatic event markers, CSV-to-EEGLAB conversion, and interactive ERP time series/topomap/joint-map analysis for recorded or external .set datasets.',
      image: 'assets/errp.png',
      techStack: [
        { name: 'Python', color: '#3776ab' },
        { name: 'OpenBCI', color: '#00a6a6' },
        { name: 'EEGLAB', color: '#f59e0b' },
        { name: 'NumPy', color: '#013243' },
        { name: 'Pandas', color: '#150458' },
        { name: 'PyQt', color: '#41cd52' },
      ],
      demoUrl: 'https://youtu.be/vCeJXkBbpe4',
    },
    {
      title: 'Movie Rating Prediction & Analysis',
      description: 'Data science project exploring web scraping, feature engineering, and machine learning to predict and analyze movie ratings from Rotten Tomatoes.',
      image: 'assets/data-ss.png',
      techStack: [
        { name: 'Python', color: '#61dafb' },
        { name: 'Pandas', color: '#3178c6' },
        { name: 'Scikit-learn', color: '#f7df1e' },
        { name: 'BeautifulSoup', color: '#264de4' },
        { name: 'Matplotlib', color: '#ff6b35' },
        { name: 'Seaborn', color: '#6c5ce7' },
      ],
      githubUrl: 'https://github.com/aliburkemper12/movie-rating-prediction',
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