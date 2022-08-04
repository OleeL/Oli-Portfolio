import css from 'styled-jsx/css';
import { useSpring, a } from 'react-spring';
import { CSSProperties, FC, useState } from 'react';

interface IButtonDown {
    pressed?: boolean;
    hovered?: boolean;
    togglePressed?: () => void;
    setPressed?: (_state: boolean) => void;
    setHovered?: (_state: boolean) => void;
    className?: string;
    style?: CSSProperties;
}

const GetCollectionStyle = () => css.resolve`
    a {
        margin-left: auto;
        margin-right: auto;
        width: 100px; /* Need a specific value to work */
        right: 0;
        left: 0;
        bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        cursor: pointer;
        background: black;
        width: 50px;
        height: 50px;
        padding: 5px 10px;
        border-radius: 100%;
    }
`;

const GetLineStyle = () => css.resolve`
    div {
        margin: 6px 0px 6px 0px;
        border-radius: 12px;
        width: 25px;
        height: 4px;
        background-color: white;
    }

    .left {
        transform: translate3d(-8px, 10px, 0px) rotate(45deg);
    }

    .right {
        transform: translate3d(8px, -6px, 0px) rotate(135deg);
    }
`;

const Left = () => {
    const { className, styles } = GetLineStyle();
    return <div className={className + ' left'}>{styles}</div>;
};

const Right = () => {
    const { className, styles } = GetLineStyle();
    return <div className={className + ' right'}>{styles}</div>;
};

const ButtonDown: FC<IButtonDown> = ({
    setPressed = () => null,
    pressed = false,
    className,
    style,
}) => {
    const collection = GetCollectionStyle();
    const [hovered, setHovered] = useState(false);
    const togglePressed = () => setPressed(!pressed);
    const scale = hovered ? 1.2 : 1;
    const obj: CSSProperties = {
        // boxShadow: `0px 0px 10px 3px ${hovered ? hoverColor : idleColor}`,
        scale: scale,
        ...style,
    };
    const spring = useSpring(obj);
    const trimmedProps = [collection.className, className].filter(x => x != null).join(' ');

    return (
        <a.a
            onClick={togglePressed}
            style={spring}
            className={trimmedProps}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {collection.styles}
            <Left />
            <Right />
        </a.a>
    );
};

export const ButtonUp: FC<IButtonDown> = props => {
    const style = {
        transform: 'rotate(3.142rad)',
    };
    return <ButtonDown {...props} style={style} />;
};

export default ButtonDown;
