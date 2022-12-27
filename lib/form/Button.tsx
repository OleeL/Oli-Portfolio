import { DetailedHTMLProps, FC, HTMLAttributes, useId } from 'react';

type ButtonProps = DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Button: FC<ButtonProps> = props => {
    const reactId = useId();
    const defaultId = `${reactId}`;
    const { children, className = 'default', style, id = defaultId } = props;
    return (
        <button
            id={id}
            {...props}
            className={`button-${className}`}
            style={style}>
            {children}
        </button>
    );
};
