import { ComponentType, FC } from 'react';
import { Button, ButtonProps } from './Button';

type FormAddendum = {
    submitText?: string;
    omitSubmit?: boolean;
    buttonComponent?: ComponentType<ButtonProps>;
    loading?: boolean;
    disabled?: boolean;
};

const formAddendumKeys: FormAddendum = {
    submitText: undefined,
    omitSubmit: undefined,
    buttonComponent: undefined,
} as FormAddendum;

type FormProps = React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
> &
    FormAddendum;

export const Form: FC<FormProps> = props => {
    const {
        children,
        className = 'default',
        submitText = 'Submit',
        omitSubmit = false,
        disabled = false,
        loading = false,
        onSubmit = () => {},
    } = props;

    const ButtonComponent = props?.buttonComponent ?? Button;

    const cleanseProps = { ...props };
    Object.keys(formAddendumKeys).forEach((key: string) => {
        delete cleanseProps[key as keyof FormAddendum];
    });

    return (
        <form
            {...cleanseProps}
            className={`form-${className}`}
            onSubmit={onSubmit}>
            {children}
            {!omitSubmit && (
                <>
                    <ButtonComponent disabled={disabled} loading={loading}>
                        {submitText}
                    </ButtonComponent>
                </>
            )}
        </form>
    );
};
