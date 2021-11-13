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
                fpsLimit: 165,
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

export default ParticleBackdrop;