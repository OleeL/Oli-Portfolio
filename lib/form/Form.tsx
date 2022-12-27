import { FC, ReactNode } from 'react';

interface IFormProps {
    children?: ReactNode;
    className?: string;
}

export const Form: FC<IFormProps> = ({ children, className = 'default' }) => {
    return <div className={`form-${className}`}>{children}</div>;
};
