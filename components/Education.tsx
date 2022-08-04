import { FC } from 'react';
import css from 'styled-jsx/css';
import { GetScrollSpring, goToSection } from '../utilities/ScrollHandler';
import ButtonDown from './buttons/ButtonDown';

const style = css`
    section {
        background-color: #497bfe;
    }

    div {
        padding: 50px;
    }
`;

const Education: FC = () => {
    const api = GetScrollSpring();
    return (
        <section id="education">
            <div className="section-content">
                <h1>Education</h1>
            </div>
            <ButtonDown setPressed={() => goToSection({ api: api, id: 'projects' })} />
            <style jsx>{style}</style>
        </section>
    );
};

export default Education;
