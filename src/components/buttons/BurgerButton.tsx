'use client';

import css from 'styled-jsx/css';
import { useSpring, animated, SpringConfig, a } from '@react-spring/web';
import { FC, useState } from 'react';

interface IBurgerProps {
	pressed?: boolean;
	hovered?: boolean;
	togglePressed?: () => void;
	setPressed?: (_state: boolean) => void;
	setHovered?: (_state: boolean) => void;
	className?: string;
}

const springConfig: SpringConfig = {
	tension: 400,
	friction: 50,
};

const GetCollectionStyle = () => css.resolve`
	a {
		margin: 5px;
		position: absolute;
		top: 0;
		left: 5px;
		cursor: pointer;
		background: black;
		padding: 5px 10px;
		border-radius: 10px;
	}
`;

const GetLineStyle = () => css.resolve`
	div {
		margin: 6px 0px 6px 0px;
		border-radius: 12px;
		width: 32px;
		height: 4px;
		background-color: white;
	}
`;

const GetRotRight = (hovered: boolean): string => (hovered ? '45deg' : '0deg');
const GetRotLeft = (hovered: boolean): string => (hovered ? '-45deg' : '0deg');
const GetTranslationLeftBottom = (hovered: boolean): string =>
	hovered ? '18px,-5.5px,0px' : '0px,0px,0px';
const GetTranslationRightBottom = (hovered: boolean): string =>
	hovered ? '-2px,-5.5px,0px' : '0px,0px,0px';
const GetTranslationLeftTop = (hovered: boolean): string =>
	hovered ? '-2px,5.5px,0px' : '0px,0px,0px';
const GetTranslationRightTop = (hovered: boolean): string =>
	hovered ? '18px,5.5px,0px' : '0px,0px,0px';

const Top: FC<IBurgerProps> = ({ pressed = false, hovered = false }) => {
	const { className, styles } = GetLineStyle();
	const rotation = pressed ? GetRotLeft(hovered) : GetRotRight(hovered);
	const translation = pressed
		? GetTranslationLeftTop(hovered)
		: GetTranslationRightTop(hovered);
	const width = hovered ? '16px' : '32px';
	const spring = useSpring({
		transform: `translate3d(${translation}) rotate(${rotation})`,
		width,
		config: springConfig,
	});

	return (
		<animated.div style={spring} className={className}>
			{styles}
		</animated.div>
	);
};

const Middle: FC<IBurgerProps> = () => {
	const { className, styles } = GetLineStyle();
	return <div className={className}>{styles}</div>;
};

const Bottom: FC<IBurgerProps> = ({ hovered = false, pressed = false }) => {
	const { className, styles } = GetLineStyle();
	const rotation = pressed ? GetRotRight(hovered) : GetRotLeft(hovered);
	const translation = pressed
		? GetTranslationRightBottom(hovered)
		: GetTranslationLeftBottom(hovered);
	const width = hovered ? '16px' : '32px';
	const spring = useSpring({
		transform: `translate3d(${translation}) rotate(${rotation})`,
		width,
		config: springConfig,
	});

	return (
		<animated.div style={spring} className={className} id="burger-button">
			{styles}
		</animated.div>
	);
};

const BurgerButton: FC<IBurgerProps> = ({
	setPressed = () => null,
	pressed = false,
	className,
}) => {
	const collection = GetCollectionStyle();
	const [hovered, setHovered] = useState(false);
	const togglePressed = () => setPressed(!pressed);
	// const _hoverColor = 'rgba(2, 126, 219, 1)';
	// const _idleColor = 'rgba(0, 0, 0, 0)';
	const scale = hovered ? 1.01 : 1;
	const spring = useSpring({
		scale,
		// boxShadow: `0px 0px 10px 3px ${hovered ? hoverColor : idleColor}`,
	});

	return (
		<a.a
			onClick={togglePressed}
			style={spring}
			className={`${collection.className} ${className}`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}>
			<Top pressed={pressed} hovered={hovered} />
			<Middle />
			<Bottom pressed={pressed} hovered={hovered} />
			{collection.styles}
		</a.a>
	);
};

export default BurgerButton;
