import { FC, ReactElement } from 'react';
import { Button, ButtonProps } from './Button';

type FormProps = React.DetailedHTMLProps<
	React.FormHTMLAttributes<HTMLFormElement>,
	HTMLFormElement
> & {
	submitText?: string;
	omitSubmit?: boolean;
	buttonComponent?: (props: ButtonProps) => ReactElement;
	loading?: boolean;
	disabled?: boolean;
};

export const Form: FC<FormProps> = ({
	children,
	className = 'default',
	submitText = 'Submit',
	omitSubmit = false,
	disabled = false,
	loading = false,
	buttonComponent: ButtonComponent = Button,
	onSubmit = () => {},
	...rest
}) => {
	return (
		<form {...rest} className={`form-${className}`} onSubmit={onSubmit}>
			{children}
			{!omitSubmit && (
				<ButtonComponent disabled={disabled} loading={loading}>
					{submitText}
				</ButtonComponent>
			)}
		</form>
	);
};
