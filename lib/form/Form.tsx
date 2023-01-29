import { ButtonHTMLAttributes, ComponentType, FC } from 'react';
import { Button } from './Button';

type FormAddendum = {
    submitText?: string;
    omitSubmit?: boolean;
    buttonComponent?: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;
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
                    <ButtonComponent disabled={disabled}>
                        {submitText}
                    </ButtonComponent>
                </>
            )}
        </form>
    );
};
