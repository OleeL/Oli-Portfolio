import { FC } from 'react';
import { useScrollSpring, goToSection } from '../utilities/ScrollHandler';
import ButtonDown from './buttons/ButtonDown';

const AboutMe: FC = () => {
    const api = useScrollSpring();
    return (
        <section id="about">
            <div>
                <div className="section-content">
                    <h3 className="divider">About me</h3>
                </div>
                <p>
                    Hi! <br /> <br /> I am a passionate software engineer and a problem solver.
                    Learning new things, making stuff, and exploring technology is my passion. This
                    site is to showcase my personal projects.
                </p>
                <ButtonDown setPressed={() => goToSection({ api, id: 'experience' })} />
            </div>
        </section>
    );
};

export default AboutMe;
