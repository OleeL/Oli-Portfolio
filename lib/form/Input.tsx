import { FC, useId } from 'react';
import { Label } from './Label';

type InputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	label?: string;
};

// Generates label with it
export const Input: FC<InputProps> = props => {
	const reactId = useId();
	const defaultId = `${reactId}`;
	const {
		children,
		className = 'default',
		style,
		id = defaultId,
		label,
	} = props;

	return (
		<>
			{label && <Label htmlFor={id}>{label}</Label>}
			<input
				id={id}
				{...props}
				className={`input ${className}`}
				style={style}>
				{children}
			</input>
		</>
	);
};
