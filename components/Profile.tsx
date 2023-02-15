import { FC } from 'react';
import { a } from 'react-spring';
import { useFadeInArr } from '../lib/global_hooks';

const Profile: FC = () => {
    const [fade] = useFadeInArr({ length: 3, delay: 0 });

    return (
        <section className="centered full-screen" id="profile">
            <div className="profile">
                <a.h1 style={fade[0]}>Oli Legg</a.h1>
                <a.h2 style={fade[1]}>Software Engineer</a.h2>
                <a.p style={fade[2]} className="profile-text code">
                    Full-stack software engineer currently working at{' '}
                    <a href="https://www.ctidigital.com">CTI Digital</a>
                </a.p>
            </div>
        </section>
    );
};

export default Profile;
