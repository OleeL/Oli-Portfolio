import { FC } from 'react';
import Section from './Section';

const EducationBody = () => <p>Education</p>;

const Education: FC = () => {
    return <Section sectionName={'Education'} body={<EducationBody />} />;
};

export default Education;
