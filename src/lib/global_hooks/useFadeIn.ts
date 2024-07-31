'use client';

import { RefObject, useRef, useState } from 'react';
import {
	SpringValue,
	useSpring,
	UseSpringProps,
	useSprings,
	useIsomorphicLayoutEffect,
} from '@react-spring/web';

type FadeProps = {
	delay?: number;
	initialDelay?: number;
};

type FadePropsArr = FadeProps & {
	length: number;
};

export const useFadeIn = (props?: FadeProps | UseSpringProps) => {
	const [mounted, setMounted] = useState(false);

	useIsomorphicLayoutEffect(() => {
		setMounted(true);
	}, []);

	const spring = useSpring({
		...(mounted
			? { opacity: 1, transform: 'translate(0px,0px)' }
			: { opacity: 0, transform: 'translate(-10px, -20px)' }),
		...props,
	});

	return spring;
};

export const useFadeReset = (
	props: UseSpringProps,
	deps: readonly unknown[],
) => {
	const [mounted, setMounted] = useState(false);

	useIsomorphicLayoutEffect(() => {
		setMounted(true);
	}, []);

	const [fade, api] = useSpring(() => ({
		reset: true,
		from: {
			opacity: 1,
			transform: 'translate(0px, 0px)',
		},
		to: {
			opacity: 0,
			transform: 'translate(-10px, -20px)',
		},
		config: { mass: 1, tension: 170, friction: 26 },
		...props,
	}));

	useIsomorphicLayoutEffect(() => {
		if (mounted) {
			api.start({
				reset: true,
				from: { opacity: 0, transform: 'translate(-10px, -20px)' },
				to: { opacity: 1, transform: 'translate(0px, 0px)' },
			});
		}
		return () => {
			api.stop();
		};
	}, [mounted, api, deps]);

	return fade;
};

const getDefaultFadeProps = ({
	length = 1,
	delay = 200,
	initialDelay = 0,
}: Partial<FadePropsArr>): Required<FadePropsArr> => {
	return { length, delay, initialDelay };
};

export const useFadeInArr = (props: FadePropsArr | number) => {
	const [mounted, setMounted] = useState(false);

	useIsomorphicLayoutEffect(() => {
		setMounted(true);
	}, []);

	const { length, delay, initialDelay } =
		typeof props !== 'number'
			? getDefaultFadeProps(props)
			: getDefaultFadeProps({ length: props });

	// Initialize the springs
	const [springs, api] = useSprings(length, index => ({
		delay: initialDelay + index * delay,
		from: { opacity: 0, transform: 'translate(-10px, -20px)' },
		to: { opacity: 1, transform: 'translate(0px, 0px)' },
		config: { mass: 1, tension: 170, friction: 26 },
	}));

	// Update springs when mounted state changes
	useIsomorphicLayoutEffect(() => {
		if (mounted) {
			api.start(index => ({
				from: { opacity: 0, transform: 'translate(-10px, -20px)' },
				to: { opacity: 1, transform: 'translate(0px, 0px)' },
				delay: initialDelay + index * delay,
			}));
		}
		return () => {
			api.stop();
		};
	}, [mounted, api, initialDelay, delay]);

	return springs;
};

export type FadeCSS = {
	opacity: SpringValue<number>;
	transform: SpringValue<string>;
	initialDelay: SpringValue<number>;
};

export type FadeInIfVisible<T> = {
	ref: RefObject<T>;
	isVisible: boolean;
	fade: FadeCSS;
};

export const useFadeInIfVisible = <T extends HTMLElement>(
	props?: FadeProps,
): FadeInIfVisible<T> => {
	const [isVisible, setVisible] = useState(false);
	const ref = useRef<T>(null);
	const { delay, initialDelay } = getDefaultFadeProps({ ...props });

	const fade = useSpring({
		opacity: isVisible ? 1 : 0,
		transform: isVisible
			? 'translate(0px, 0px)'
			: 'translate(-10px, -20px)',
		config: { mass: 70, tension: 1000, friction: 700 },
		delay,
		initialDelay,
	});

	useIsomorphicLayoutEffect(() => {
		const safeRef = ref.current;
		if (!safeRef) {
			return () => {};
		}
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setVisible(true);
				}
			});
		});
		observer.observe(safeRef);
		return () => {
			if (safeRef) observer.unobserve(safeRef);
		};
	}, []);

	return {
		ref,
		isVisible,
		fade,
	};
};

export default useFadeIn;
