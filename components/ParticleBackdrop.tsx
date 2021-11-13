import { CSSProperties } from "react";
import Particles from "react-tsparticles"

// Must use react styling here for particle compatibility
const style: CSSProperties = {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
};

const ParticleBackdrop = () =>
        <Particles
            id="tsparticles"
            style={style}
            options={{
                particles: {
                    number: {
                        value: 60,
                        density: {
                            enable: true,
                            value_area: 1500
                        }
                    },
                    links: {
                        enable: true,
                        opacity: 0.09
                    },
                    move: {
                        direction: "right",
                        speed: 0.8,
                        enable: true,
                        straight: false
                    },
                    size: {
                        random: true,
                        value: 1
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 2,
                            opacity_min: 0.05
                        }
                    }
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push"
                        }
                    },
                    modes: {
                        push: {
                            quantity: 1
                        }
                    }
                },
                retina_detect: true
            }} />

const DefaultBackdrop = () => <Particles
options={{
  background: {
    color: {
      value: "#0d47a1",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}}
/>

export default ParticleBackdrop;