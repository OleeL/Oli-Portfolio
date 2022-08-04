import { FC } from 'react';
import css from 'styled-jsx/css';
import { GetScrollSpring, goToSection } from '../utilities/ScrollHandler';
import ButtonDown from './buttons/ButtonDown';

const ProfileStyle = css`
    section {
        background-color: black;
    }

    .section-content {
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const AboutMe: FC = () => {
    const api = GetScrollSpring();
    return (
        <section id="about">
            <div className="section-content">
                <h1>About Me</h1>
            </div>
            <p>
                Hi! <br /> <br /> I am a passionate software developer and a problem solver.
                Learning new things, making stuff, and exploring technology is my passion. You can
                find links to various projects here. Feel free to shoot me a mail if anything
                manages to catch your attention.
            </p>
            <ButtonDown setPressed={() => goToSection({ api: api, id: 'experience' })} />
            <style jsx>{ProfileStyle}</style>
        </section>
    );
};

export default AboutMe;
