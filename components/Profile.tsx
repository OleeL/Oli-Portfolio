import { FC } from 'react';
import { a } from 'react-spring';
import { useFadeInArr } from '../lib/global_hooks';
import { useScrollSpring, goToSection } from '../utilities/ScrollHandler';
import ButtonDown from './buttons/ButtonDown';

const Profile: FC = () => {
    const api = useScrollSpring();
    const fade = useFadeInArr({ length: 3, delay: 300, initialDelay: 0 });

    return (
        <section id="profile">
            <div className="container">
                <a.h1 style={fade[0]}>Oliver Legg</a.h1>
                <a.h2 style={fade[1]}>Software Engineer</a.h2>
                <a.p style={fade[2]} className="profile-text">
                    Full-stack software engineer currently working at{' '}
                    <a href="https://www.silverchip.com">Silverchip</a>
                </a.p>
            </div>
            <ButtonDown setPressed={() => goToSection({ api, id: 'about' })} />
        </section>
    );
};

export default Profile;
