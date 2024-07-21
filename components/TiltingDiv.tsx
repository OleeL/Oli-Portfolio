import { FC, ReactNode } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Spring = {
	xy: [0, 0],
	config: { mass: 30, tension: 1000, friction: 200 },
};

const tiltAmount = 100;

const calc = (x: number, y: number) => [
	-(y - window.innerHeight / 2) / tiltAmount,
	(x - window.innerWidth / 2) / tiltAmount,
	1.1,
];

const rotate = (x: number, y: number): string =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`;

interface IInteractive {
	className?: string;
	style?: object;
	children: ReactNode;
}

export const TiltingDiv: FC<IInteractive> = ({
	children,
	className,
	style,
}) => {
	const [spring, set] = useSpring(() => Spring);

	return (
		<>
			<animated.div
				className={className}
				style={{ transform: spring.xy.to(rotate), ...style }}
				onMouseMove={({ clientX: x, clientY: y }) =>
					set({ xy: calc(x, y) })
				}
				onMouseLeave={() => set({ xy: [0, 0] })}>
				{children}
			</animated.div>
		</>
	);
};

export default TiltingDiv;
