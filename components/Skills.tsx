import { FC } from 'react';
import css from 'styled-jsx/css';
import { GetScrollSpring, goToSection } from '../utilities/ScrollHandler';
import { ButtonUp } from './buttons/ButtonDown';

const style = css`
    section {
        background-color: #ffb842;
    }

    div {
        padding: 50px;
        color: black;
    }
`;

const Skills: FC = () => {
    const api = GetScrollSpring();
    return (
        <section id="skills">
            <div className="section-content">
                <h1>Skills</h1>
            </div>
            <ButtonUp setPressed={() => goToSection({ api: api, id: 'profile' })} />
            <style jsx>{style}</style>
        </section>
    );
};

export default Skills;
