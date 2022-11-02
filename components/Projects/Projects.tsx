import { FC } from 'react';
import Section from '../Section';
import { ProjectList } from './ProjectList';

const ProjectsBody = () => {
    return (
        <div className="projects-container">
            {ProjectList.map(x => (
                <div key={x.id} className="home-box project-box">
                    <>
                        <a href={x.url}>{x.name}</a>
                        {x.description}
                    </>
                </div>
            ))}
        </div>
    );
};

const Projects: FC = () => {
    return <Section sectionName={'Projects'} Content={ProjectsBody} />;
};

export default Projects;
