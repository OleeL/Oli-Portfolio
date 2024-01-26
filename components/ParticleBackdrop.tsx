import React, { Suspense, CSSProperties, FC } from 'react';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const Particles = React.lazy(() => import('react-tsparticles'));

// Must use react styling here for particle compatibility
const style: CSSProperties = {
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
	position: 'absolute',
	zIndex: -1,
	alignItems: 'center',
	justifyContent: 'center',
};

const ParticleBackdropTemporary = () => <div style={style}></div>;

const ParticleBackdrop: FC = () => {
	const particlesInit = async (main: Engine) => loadFull(main);

	return (
		<div style={style}>
			<Suspense fallback={<ParticleBackdropTemporary />}>
				<Particles
					id={'tsparticles'}
					init={particlesInit}
					options={{
						background: {
							color: {
								value: '#e5e5e5',
							},
						},
						fpsLimit: 120,
						interactivity: {
							events: {
								onClick: {
									enable: true,
									mode: 'push',
								},
								onHover: {
									enable: true,
									mode: 'repulse',
								},
								resize: true,
							},
							modes: {
								push: {
									quantity: 1,
								},
								repulse: {
									factor: 2,
									distance: 100,
									duration: 10,
								},
							},
						},
						particles: {
							color: {
								value: '#000000',
							},
							links: {
								color: '#000000',
								distance: 150,
								enable: true,
								opacity: 1,
								width: 1,
							},
							collisions: {
								enable: true,
							},
							move: {
								direction: 'none',
								enable: true,
								outModes: {
									default: 'bounce',
								},
								random: false,
								speed: 0.2,
								straight: false,
							},
							number: {
								density: {
									enable: true,
									area: 800,
								},
								value: 80,
							},
							opacity: {
								value: 0.5,
							},
							shape: {
								type: 'circle',
							},
							size: {
								value: { min: 1, max: 5 },
							},
						},
						detectRetina: true,
					}}
				/>
			</Suspense>
		</div>
	);
};

export default ParticleBackdrop;
