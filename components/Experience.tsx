import { FC } from 'react';
import Section from './Section';

const ExperienceBody = () => <p>Experienced</p>;

const Experience: FC = () => {
    return <Section sectionName={'Experience'} body={<ExperienceBody />} />;
};

export default Experience;
