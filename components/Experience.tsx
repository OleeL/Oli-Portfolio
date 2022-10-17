import { FC } from 'react';
import { useScrollSpring, goToSection } from '../utilities/ScrollHandler';
import ButtonDown from './buttons/ButtonDown';

const Experience: FC = () => {
    const api = useScrollSpring();
    return (
        <section id="experience">
            <div className="fill-width">
                <div className="section-content">
                    <h3 className="divider">Experience</h3>
                </div>
                <p>Hello</p>
            </div>
            <ButtonDown setPressed={() => goToSection({ api, id: 'education' })} />
        </section>
    );
};

export default Experience;
