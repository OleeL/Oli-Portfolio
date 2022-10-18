import { FC } from 'react';
import Section from './Section';

const AboutMeBody = () => (
    <p>
        <span className="active">Hi!</span> I am a passionate software engineer and a problem
        solver. Learning new things, making stuff, and exploring technology is my passion. This site
        is to showcase my personal projects.
    </p>
);

const AboutMe: FC = () => {
    return <Section sectionName={'About Me'} body={<AboutMeBody />} />;
};

export default AboutMe;
