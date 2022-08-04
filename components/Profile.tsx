import { Vec } from 'math2d';
import { FC } from 'react';
import css from 'styled-jsx/css';
import { useWindowSize } from '../lib/global_hooks';
import { range, shuffleArray } from '../lib/global_hooks';
import { GetScrollSpring, goToSection } from '../utilities/ScrollHandler';
import ButtonDown from './buttons/ButtonDown';

const ProfileStyle = css`
    section {
        display: flex;
        width: 100%;
        max-width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
        font-size: 27px;
        user-select: none;
        background-color: rgba(221, 255, 252, 1);
        overflow-x: hidden;
        overflow-y: hidden;

    }

    div {
        background-color: rgba(0, 0, 0, 1);
        padding: 50px;
    }
`;

const Mountain = ({ x, y }: Vec) => {
    return (
        <svg
            style={{
                position: 'absolute',
                width: 400,
                height: 200,
                bottom: `${y}px`,
                left: `${x}px`,
            }}
            viewBox="0 0 450 200"
            transform="rotate(180)">
            <filter id='shadow' colorInterpolationFilters="sRGB">
                <feDropShadow  dy="0" stdDeviation="3" floodOpacity="0.2"/>
            </filter>
            <g filter='url(#shadow)'>
                <path fill="green" stroke="green" id="curve" d=" M 0 0 A 200 200 0 0 0 400 0" />
            </g>
        </svg>
    );
};

const Profile: FC = () => {
    const api = GetScrollSpring();

    const width = useWindowSize()?.width ?? 0;
    const hills = 20;

    return (
        <section id="profile">
            <div className="section-content">
                <h1>Oliver Legg</h1>
            </div>
            {shuffleArray(range(0,hills)).map(x=> <Mountain key={x} x={(width / hills) * x - 100} y={((x * 33) % 50) - 50} />)}
            <ButtonDown setPressed={() => goToSection({ api: api, id: 'about' })} />
            <style jsx>{ProfileStyle}</style>
        </section>
    );
};

export default Profile;
