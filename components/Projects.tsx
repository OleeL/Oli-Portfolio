import { FC } from 'react';
import Section from './Section';

const ProjectsBody = () => <p>Projects</p>;

const Projects: FC = () => {
    return <Section sectionName={'Projects'} body={<ProjectsBody />} />;
};
export default Projects;
