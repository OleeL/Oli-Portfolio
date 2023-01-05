import { FC, HTMLAttributes, useId } from 'react';
import { a } from 'react-spring';

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = props => {
    const reactId = useId();
    const defaultId = `${reactId}`;
    const { children, className = 'default', style, id = defaultId } = props;

    return (
        <a.button
            id={id}
            {...props}
            className={`button-${className}`}
            style={style}>
            {children}
        </a.button>
    );
};
