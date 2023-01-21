import { FC, HTMLAttributes, useId, useState } from 'react';
import { a, useSpring } from 'react-spring';

export type HoverColorType = {
    hoverColor: string;
    defaultColor: string;
};

type HoverTypes = {
    textColor?: HoverColorType;
    borderColor?: HoverColorType;
};

const hoverKeys: HoverTypes = {
    textColor: undefined,
    borderColor: undefined,
};

export type SpringButtonProps = HTMLAttributes<HTMLButtonElement> & HoverTypes;

const getPropColor = (prop: HoverColorType | null, hover: boolean) => {
    if (!prop) return 'white';
    return hover ? prop.hoverColor : prop.defaultColor;
};

export const SpringButton: FC<SpringButtonProps> = props => {
    const reactId = useId();
    const defaultId = `${reactId}`;
    const {
        children,
        className = 'default',
        style,
        id = defaultId,
        textColor,
        borderColor = null,
    } = props;

    const [hover, setHover] = useState(false);
    const spring = useSpring({
        ...(textColor && { color: getPropColor(textColor, hover) }),
        ...(borderColor && { borderColor: getPropColor(borderColor, hover) }),
    });

    const newProps = { ...props };
    Object.keys(hoverKeys).forEach((key: string) => {
        delete newProps[key as keyof HoverTypes];
    });

    return (
        <a.button
            id={id}
            style={{ ...style, ...spring }}
            {...newProps}
            className={`button-${className}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            {children}
        </a.button>
    );
};
