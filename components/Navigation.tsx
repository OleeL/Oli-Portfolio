import { FC, ReactNode, useState } from 'react';
import { a, useSpring } from 'react-spring';
import css from 'styled-jsx/css';
import { GetScrollSpring, goToSection } from '../utilities/ScrollHandler';
import BurgerButton from './buttons/BurgerButton';

interface INavigation {
    className?: string;
    style?: object;
    children?: ReactNode;
}

interface IButton {
    buttonName: string;
}

const NavigationButton: FC<IButton> = ({ buttonName }) => {
    const api = GetScrollSpring();

    const { className, styles } = GetNavigationStyling(false);
    const [hovered, setHovered] = useState(false);
    const scale = hovered ? 1.1 : 1;

    const spring = useSpring({
        scale: scale,
        backgroundColor: hovered ? 'rgba(2, 126, 219, 1)' : 'rgba(0, 0, 0, 0)',
        color: 'black',
        border: 'none',
        borderRadius: '4px',
        margin: '1.5px',
    });

    return (
        <a.button
            style={spring}
            className={'nav-button ' + className}
            onClick={() => goToSection({ api: api, id: buttonName.toLowerCase() })}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {buttonName}
            {styles}
        </a.button>
    );
};

const GetNavigationStyling = (forceShow: boolean) => css.resolve`
    ul {
        display: none;
    }

    li {
        text-align: center;
    }

    div {
        position: absolute;
        display: inline-flex;
        width: 100%;
        justify-content: space-evenly;
        user-select: none;
        z-index: 999;
    }

    .nav-button {
        width: 120px;
        height: 50px;
    }

    @media (min-width: 767px) {
        a {
            display: none;
        }
    }

    @media (max-width: 766px) {
        ul {
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        li {
            width: 100%;
        }

        .nav-button {
            width: 50%;
            height: 50px;
        }
    }

    @media (${forceShow ? `min-width: 0px` : `min-width: 767px`}) {
        ul {
            display: inline-flex;
            padding: 10px 14px 10px 14px;
            margin: 0px;
            font-size: 18px;
            list-style: none;
            position: relative;
            justify-content: space-around;
            flex-wrap: wrap;
            width: 100%;
        }
    }
`;

export const Navigation: FC<INavigation> = () => {
    const [pressed, setPressed] = useState(false);
    const [, setHovered] = useState(false);
    const { className, styles } = GetNavigationStyling(pressed);

    return (
        <div id="navigation" className={className}>
            <ul
                className={className}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                {styles}
                <li className={className}>
                    <NavigationButton buttonName={'About'} />
                </li>
                <li className={className}>
                    <NavigationButton buttonName={'Experience'} />
                </li>
                <li className={className}>
                    <NavigationButton buttonName={'Education'} />
                </li>
                <li className={className}>
                    <NavigationButton buttonName={'Projects'} />
                </li>
                <li className={className}>
                    <NavigationButton buttonName={'Skills'} />
                </li>
            </ul>
            <BurgerButton className={className} pressed={pressed} setPressed={setPressed} />
        </div>
    );
};

export default Navigation;
