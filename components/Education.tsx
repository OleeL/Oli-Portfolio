import { FC } from 'react';
import { useScrollSpring, goToSection } from '../utilities/ScrollHandler';
import ButtonDown from './buttons/ButtonDown';

const Education: FC = () => {
    const api = useScrollSpring();
    return (
        <section id="education">
            <div className="fill-width">
                <div className="section-content">
                    <h3 className="divider">Education</h3>
                </div>
                <p>Educated</p>
            </div>
            <ButtonDown setPressed={() => goToSection({ api, id: 'projects' })} />
        </section>
    );
};

export default Education;
