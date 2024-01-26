import { ButtonHTMLAttributes, FC, useId, useState } from 'react';
import { a, useSpring } from 'react-spring';
import { Spinner } from '../components/Spinner';
import { ExtraProps } from './Button';

export type HoverColorType = {
	hoverColor: string;
	defaultColor: string;
};

type HoverTypes = {
	textColor?: HoverColorType;
	borderColor?: HoverColorType;
};

export type SpringButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	HoverTypes &
	ExtraProps;

const getPropColor = (prop: HoverColorType | null, hover: boolean) => {
	if (!prop) return 'white';
	return hover ? prop.hoverColor : prop.defaultColor;
};

export const SpringButton: FC<SpringButtonProps> = props => {
	const reactId = useId();
	const defaultId = `${reactId}`;
	const {
		children,
		className = 'default',
		style,
		id = defaultId,
		textColor,
		borderColor = null,
		loading = false,
		loadingProps = {
			settings: {
				radius: 20,
				size: 50,
			},
			svgProps: {
				style: {
					width: 20,
					height: 20,
				},
			},
		},
		...rest
	} = props;

	const [hover, setHover] = useState(false);
	const spring = useSpring({
		...(textColor && { color: getPropColor(textColor, hover) }),
		...(borderColor && { borderColor: getPropColor(borderColor, hover) }),
	});

	return (
		<a.button
			id={id}
			style={{ ...style, ...spring }}
			{...rest}
			className={`button-${className}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			{children}
			{loading && <Spinner {...loadingProps} />}
		</a.button>
	);
};
