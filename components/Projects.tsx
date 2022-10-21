import { FC } from 'react';
import Section from './Section';

const ProjectsBody = () => <p>Projects</p>;

const Projects: FC = () => {
    return <Section sectionName={'Projects'} Content={ProjectsBody} />;
};
export default Projects;
