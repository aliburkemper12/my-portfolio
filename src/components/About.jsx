import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';


export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    'src/assets/headshot.jpg',
    'src/assets/alabama-football.webp',
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <section id="about" style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #1a0a2e 0%, #16213e 100%)',
      padding: '6rem 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Intro Section */}
        <AnimatedSection delay={0}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '6rem',
        }}>
          {/* Text Content */}
          <div style={{
            color: '#ffffff',
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffd93d 0%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              About Me
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#e8d5b7',
              marginBottom: '1.5rem',
            }}>
              Hey! I’m Ali — a senior at the University of Alabama studying Computer Science and an aspiring full-stack developer. I love creating beautiful, interactive web experiences that blend creativity with functionality. When I’m not coding, you can usually find me painting, practicing guitar, or playing sports.
            </p>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#e8d5b7',
              marginBottom: '1.5rem',
            }}>
I’m passionate about building and designing modern web applications that bring ideas to life. 
  My experience spans front-end and back-end development, where I’ve worked on projects involving dynamic UIs, database design, and process automation. 
  I enjoy solving technical challenges, learning new technologies, and creating tools that make a real impact.            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '2rem',
            }}>
              <span style={{
                padding: '0.5rem 1rem',
                background: 'rgba(255, 107, 53, 0.2)',
                border: '1px solid #ff6b35',
                borderRadius: '20px',
                color: '#ff6b35',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}>
                React
              </span>
              <span style={{
                padding: '0.5rem 1rem',
                background: 'rgba(139, 92, 246, 0.2)',
                border: '1px solid #8b5cf6',
                borderRadius: '20px',
                color: '#a78bfa',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}>
                Three.js
              </span>
              <span style={{
                padding: '0.5rem 1rem',
                background: 'rgba(247, 147, 30, 0.2)',
                border: '1px solid #f7931e',
                borderRadius: '20px',
                color: '#f7931e',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}>
                JavaScript
              </span>
              <span style={{
                padding: '0.5rem 1rem',
                background: 'rgba(255, 217, 61, 0.2)',
                border: '1px solid #ffd93d',
                borderRadius: '20px',
                color: '#ffd93d',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}>
                CSS/HTML
              </span>
            <span style={{
            padding: '0.5rem 1rem',
            background: 'rgba(53, 114, 165, 0.2)',
            border: '1px solid #3572A5',
            borderRadius: '20px',
            color: '#3572A5',
            fontSize: '0.9rem',
            fontWeight: 600,
            }}>
            Python
            </span>
            <span style={{
            padding: '0.5rem 1rem',
            background: 'rgba(0, 117, 143, 0.2)',
            border: '1px solid #00758F',
            borderRadius: '20px',
            color: '#00758F',
            fontSize: '0.9rem',
            fontWeight: 600,
            }}>
            SQL
            </span>
            <span style={{
            padding: '0.5rem 1rem',
            background: 'rgba(233, 30, 99, 0.15)',
            border: '1px solid #E91E63',
            borderRadius: '20px',
            color: '#E91E63',
            fontSize: '0.9rem',
            fontWeight: 600,
            }}>
            WebGL
            </span>
            <span style={{
            padding: '0.5rem 1rem',
            background: 'rgba(176, 114, 25, 0.2)',
            border: '1px solid #B07219',
            borderRadius: '20px',
            color: '#B07219',
            fontSize: '0.9rem',
            fontWeight: 600,
            }}>
            Java
            </span>
            <span style={{
            padding: '0.5rem 1rem',
            background: 'rgba(0, 76, 153, 0.2)',
            border: '1px solid #004C99',
            borderRadius: '20px',
            color: '#004C99',
            fontSize: '0.9rem',
            fontWeight: 600,
            }}>
            C/C++
            </span>

            </div>
          </div>

          {/* Photo Carousel */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '500px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}>
              <img
                src={images[currentImage]}
                alt={`Photo ${currentImage + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.5s ease',
                }}
              />

              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: 'none',
                  color: 'white',
                  fontSize: '2rem',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255, 107, 53, 0.8)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.5)';
                }}
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: 'none',
                  color: 'white',
                  fontSize: '2rem',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255, 107, 53, 0.8)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(0, 0, 0, 0.5)';
                }}
              >
                ›
              </button>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1.5rem',
            }}>
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  style={{
                    width: currentImage === index ? '40px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    border: 'none',
                    background: currentImage === index ? '#ff6b35' : 'rgba(255, 255, 255, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection delay={0.2}>
        <div style={{ marginBottom: '6rem' }}>
          <h3 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            color: '#ffffff',
            textAlign: 'center',
          }}>
            🎓 Education
          </h3>
          
          <div style={{
            background: 'rgba(22, 33, 62, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2.5rem',
            border: '2px solid rgba(255, 107, 53, 0.3)',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div>
                <h4 style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#ff6b35',
                  marginBottom: '0.5rem',
                }}>
                  The University of Alabama
                </h4>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#e8d5b7',
                  marginBottom: '0.5rem',
                }}>
                  Bachelor of Science in Computer Science
                </p>
                <p style={{
                  fontSize: '1rem',
                  color: '#a08e7a',
                }}>
                  Expected Graduation: May 2026
                </p>
              </div>
              
              <div style={{
                textAlign: 'right',
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #ffd93d 0%, #ff6b35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  3.64 GPA
                </div>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem',
            }}>
              <div style={{
                padding: '1.5rem',
                background: 'rgba(139, 92, 246, 0.1)',
                borderRadius: '15px',
                border: '1px solid #8b5cf6',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
                <h5 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#a78bfa',
                  marginBottom: '0.5rem',
                }}>
                  UA Competitive Achievement Scholarship
                </h5>
                <p style={{ fontSize: '0.95rem', color: '#e8d5b7' }}>
                  Full tuition merit-based scholarship
                </p>
              </div>

              <div style={{
                padding: '1.5rem',
                background: 'rgba(247, 147, 30, 0.1)',
                borderRadius: '15px',
                border: '1px solid #f7931e',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
                <h5 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#f7931e',
                  marginBottom: '0.5rem',
                }}>
                  Key Coursework
                </h5>
                <p style={{ fontSize: '0.95rem', color: '#e8d5b7' }}>
                  Data Structures, Advanced Algorithms, Web Development, Database Systems, Operating Systems, Microcomputers, Robotics, Data Science, Computer Graphics
                </p>
              </div>
            </div>
          </div>
        </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection delay={0.4}>
        <div style={{ marginBottom: '6rem' }}>
          <h3 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 900,
            marginBottom: '2rem',
            color: '#ffffff',
            textAlign: 'center',
          }}>
            💼 Experience
          </h3>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            {/* Job 1 */}
            <div style={{
              background: 'rgba(22, 33, 62, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.border = '1px solid #ff6b35';
              e.currentTarget.style.transform = 'translateX(10px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <div>
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#ff6b35',
                    marginBottom: '0.3rem',
                  }}>
                    ServiceNow Intern
                  </h4>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#e8d5b7',
                    marginBottom: '0.3rem',
                  }}>
                    Centene Corporation
                  </p>
                </div>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#a08e7a',
                  fontWeight: 600,
                }}>
                  September 2025 - Present
                </p>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                <li style={{
                  fontSize: '1rem',
                  color: '#e8d5b7',
                  marginBottom: '0.5rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#ff6b35',
                  }}>▸</span>
                    Support ServiceNow development and administration, focusing on workflows and customization.
                </li>
                <li style={{
                  fontSize: '1rem',
                  color: '#e8d5b7',
                  marginBottom: '0.5rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#ff6b35',
                  }}>▸</span>
Assist Change Catalog team by updating and maintaining change request workflows in SPRINT cycles.                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div style={{
              background: 'rgba(22, 33, 62, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.border = '1px solid #ff6b35';
              e.currentTarget.style.transform = 'translateX(10px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <div>
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#ff6b35',
                    marginBottom: '0.3rem',
                  }}>
                    Business Process Analyst Intern
                  </h4>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#e8d5b7',
                    marginBottom: '0.3rem',
                  }}>
                    Centene Corporation
                  </p>
                </div>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#a08e7a',
                  fontWeight: 600,
                }}>
                  May 2025 - August 2025
                </p>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                <li style={{
                  fontSize: '1rem',
                  color: '#e8d5b7',
                  marginBottom: '0.5rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#ff6b35',
                  }}>▸</span>
Designed an interactive visual tool in Miro to map workflows and identify inefficiencies across 25+ cross functional teams.                </li>
                <li style={{
                  fontSize: '1rem',
                  color: '#e8d5b7',
                  marginBottom: '0.5rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#ff6b35',
                  }}>▸</span>
Conducted 30+ stakeholder interviews to gather process insights and uncover pain points, leading to actionable recommendations.                </li>
                <li style={{
                  fontSize: '1rem',
                  color: '#e8d5b7',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#ff6b35',
                  }}>▸</span>
Delivered a process map adopted by leadership and Business Process Improvement teams to guide future optimization initiatives.                </li>
              </ul>
            </div>

            {/* Job 3 */}
            <div style={{
              background: 'rgba(22, 33, 62, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              padding: '2rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.border = '1px solid #ff6b35';
              e.currentTarget.style.transform = 'translateX(10px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1rem',
              }}>
                <div>
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#ff6b35',
                    marginBottom: '0.3rem',
                  }}>
                    IT Analyst Intern
                  </h4>
                  <p style={{
                    fontSize: '1.1rem',
                    color: '#e8d5b7',
                    marginBottom: '0.3rem',
                  }}>
                    Piston Automotive
                  </p>
                </div>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#a08e7a',
                  fontWeight: 600,
                }}>
                  May 2024 - August 2024
                </p>
              </div>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                <li style={{
                  fontSize: '1rem',
                  color: '#e8d5b7',
                  marginBottom: '0.5rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#ff6b35',
                  }}>▸</span>
Monitored and corrected production board errors to ensure continuous manufacturing flow.                </li>
                <li style={{
                  fontSize: '1rem',
                  color: '#e8d5b7',
                  marginBottom: '0.5rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#ff6b35',
                  }}>▸</span>
Resolved SQL database issues, production printer errors, and system downtime to maintain uptime.                </li>
              </ul>
            </div>
          </div>
        </div>
        </AnimatedSection>
      </div>
    </section>
  );
}