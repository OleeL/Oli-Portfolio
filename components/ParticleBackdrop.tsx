import { CSSProperties } from "react";
import { Particles } from "@blackbox-vision/react-particles";

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
            id="simple"
            width="auto"
            height="100vh"
            style={style}
            params={{
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
                        value: 3
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
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
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