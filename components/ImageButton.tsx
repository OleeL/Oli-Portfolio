import { FC, useState, ComponentPropsWithoutRef } from 'react';
import { animated, useSpring } from 'react-spring';
import css from 'styled-jsx/css';

const ButtonStyle = css`
    img {
        width: 6vmin;
        height: 6vmin;
        cursor: pointer;
    }
`;

interface ButtonProps extends ComponentPropsWithoutRef<'img'> {
    href?: string;
}

const ImageButton: FC<ButtonProps> = args => {
    const [hovering, setHovering] = useState(false);
    const spring = useSpring({
        transform: hovering ? `scale(1.2)` : `scale(1)`,
        margin: '2vmin',
    });

    return (
        <animated.a
            style={spring}
            onMouseEnter={() => {
                setHovering(true);
            }}
            onMouseLeave={() => {
                setHovering(false);
            }}
            href={args?.href}>
            <img alt={args.alt} {...args} />
            <style jsx>{ButtonStyle}</style>
        </animated.a>
    );
};

export default ImageButton;
