import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import TypewriterText from './Typewriter';

// Cloud component
function Cloud({ position, speed = 1 }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.position.x += delta * speed;
    if (groupRef.current.position.x > 23) groupRef.current.position.x = -20;
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <group ref={groupRef} position={position} scale={1.9}>
      {[
        [1.0, [0, 0.1, 0]],
        [0.8, [-0.8, 0.2, 0]],
        [0.9, [0.9, 0.1, 0]],
        [0.7, [-0.4, -0.3, 0]],
        [0.75, [0.6, -0.2, 0]],
        [0.7, [0.0, 0.8, 0]],
        [0.6, [1.7, 0.0, 0]],
        [0.6, [-1.3, 0.0, 0]],
      ].map(([size, pos], i) => (
        <Sphere key={i} args={[size, 32, 32]} position={pos}>
          <MeshDistortMaterial
            color="#ffa3cc"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={1}
            transparent
            opacity={1.0}
          />
        </Sphere>
      ))}
    </group>
  );
}

// Scene with multiple clouds
function CloudScene() {
  const clouds = useMemo(
    () => [
      { position: [-20, 1.0, -5], speed: 0.35 },
      { position: [-5, -3.5, -1], speed: 0.25 },
      { position: [0, 2.5, -8], speed: 0.45 },
      { position: [7, -1.0, -5], speed: 0.3 },
      { position: [15, -1.0, -4], speed: 0.28 },
      { position: [-12, 3.5, -7], speed: 0.4 },
      { position: [10, 4.5, -10], speed: 0.5 },
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={0.6} color="#fff8dc" />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffd700" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#ffebcd" />
      {clouds.map((cloud, i) => (
        <Cloud key={i} position={cloud.position} speed={cloud.speed} />
      ))}
    </>
  );
}

export default function AnimatedCloudsHero({ onScrollToProjects }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        background:
          'linear-gradient(to bottom,rgb(228, 216, 103) 0%,rgb(198, 77, 21) 50%,rgb(61, 28, 136) 100%)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      {/* 3D Cloud Scene */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <CloudScene />
      </Canvas>

      {/* Hero Content Overlay */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontWeight: 900,
            marginBottom: '1rem',
            color: 'transparent', // keeps letters see-through
            WebkitTextStroke: '1.5px white', // white outline
            textShadow:
              '0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.5)',
            letterSpacing: '-0.02em',
          }}
        >
          <TypewriterText text="Ali Burkemper" speed={150} />
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            color: '#d8e2e6',
            maxWidth: '600px',
            marginBottom: '4rem',
            textShadow: '1px 1px 2px rgba(255,255,255,0.5)',
          }}
        >
          Undergraduate Computer Science Major - Aspiring Software Developer - Tech Enthusiast
        </p>

      </div>

    </div>
  );
}
