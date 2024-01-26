import { ButtonHTMLAttributes, FC, useId } from 'react';
import { a } from 'react-spring';
import { Spinner, SpinnerProps } from '../components/Spinner';

export type ExtraProps = {
	loading?: boolean;
	loadingProps?: SpinnerProps;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ExtraProps;

export const Button: FC<ButtonProps> = props => {
	const reactId = useId();
	const {
		children,
		className = 'default',
		style,
		id = reactId,
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
	} = props;

	return (
		<a.button
			id={id}
			{...props}
			className={`button-${className}`}
			style={style}>
			{children}
			{loading && <Spinner {...loadingProps} />}
		</a.button>
	);
};
