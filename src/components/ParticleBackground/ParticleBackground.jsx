import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fullScreen: false,
    background: { color: 'transparent' },
    fpsLimit: 60,
    particles: {
      color: { value: '#6366f1' },
      links: {
        color: '#818cf8',
        distance: 150,
        enable: true,
        opacity: 0.12,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
      number: {
        value: 60,
        density: { enable: true, area: 1000 },
      },
      opacity: {
        value: { min: 0.1, max: 0.4 },
        animation: { enable: true, speed: 0.5, minimumValue: 0.1 },
      },
      size: {
        value: { min: 1, max: 2.5 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 180,
          links: { opacity: 0.3, color: '#22d3ee' },
        },
      },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <Particles
      id="hero-particles"
      options={options}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
    />
  );
}
