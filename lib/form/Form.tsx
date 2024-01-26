import { ComponentType, FC } from 'react';
import { Button, ButtonProps } from './Button';

type FormProps = React.DetailedHTMLProps<
	React.FormHTMLAttributes<HTMLFormElement>,
	HTMLFormElement
> & {
	submitText?: string;
	omitSubmit?: boolean;
	buttonComponent?: ComponentType<ButtonProps>;
	loading?: boolean;
	disabled?: boolean;
};

export const Form: FC<FormProps> = props => {
	const {
		children,
		className = 'default',
		submitText = 'Submit',
		omitSubmit = false,
		disabled = false,
		loading = false,
		buttonComponent = Button,
		onSubmit = () => {},
		...rest
	} = props;

	const ButtonComponent = buttonComponent;

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
