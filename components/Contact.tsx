import { FC } from 'react';
import { useScrollSpring, goToSection } from '../utilities/ScrollHandler';
import { ButtonUp } from './buttons/ButtonDown';

const Contact: FC = () => {
    const api = useScrollSpring();
    return (
        <section id="contact">
            <div className="fill-width">
                <div className="section-content">
                    <h3 className="divider">Contact</h3>
                </div>
                <p>0121</p>
            </div>
            <ButtonUp setPressed={() => goToSection({ api, id: 'profile' })} />
        </section>
    );
};

export default Contact;
