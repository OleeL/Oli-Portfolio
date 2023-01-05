import { FC, useId } from 'react';
import { Label } from './Label';

type TextAreaProps = React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
> & {
    label?: string;
};

export const TextArea: FC<TextAreaProps> = props => {
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
            <textarea
                id={id}
                {...props}
                className={`textarea ${className}`}
                style={style}>
                {children}
            </textarea>
        </>
    );
};
