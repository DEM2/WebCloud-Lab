import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    background: {
      color: { value: "#000000" },
    },
    fpsLimit: 120,
    interactivity: {
      detectOn: "canvas",
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        grab: { distance: 400, links: { opacity: 1 } },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { quantity: 4 },
        remove: { quantity: 2 },
      },
    },
    particles: {
      number: { value: 250, density: { enable: true, valueArea: 800 } },
      color: { value: "#8c238c" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 5 }, random: true },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        outModes: { default: "out" },
      },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <div className="particles-container">
    <Particles id="tsparticles" options={particlesOptions} />
    </div>
  ) 
};

export default ParticlesBackground;