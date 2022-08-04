import { FC } from 'react';
import css from 'styled-jsx/css';
import { GetScrollSpring, goToSection } from '../utilities/ScrollHandler';
import ButtonDown from './buttons/ButtonDown';

const style = css`
    section {
        background-color: #ff6048;
    }

    div {
        padding: 50px;
        color: black;
    }
`;

const Projects: FC = () => {
    const api = GetScrollSpring();
    return (
        <section id="projects">
            <div className="section-content">
                <h1>Projects</h1>
            </div>
            <ButtonDown setPressed={() => goToSection({ api: api, id: 'skills' })} />
            <style jsx>{style}</style>
        </section>
    );
};

export default Projects;
