import { FC, useState } from 'react';
import Image from 'next/image';
import { a, useSpring } from 'react-spring';
import Section from '../Section';
import { Project, ProjectList } from './ProjectList';
import { BulokeWindow } from '../../lib/helpers/window';

const Project: FC<Project> = ({ url, name, description, image }) => {
    const box = {
        width: image?.width ?? 0,
        height: image?.height ?? 0,
    };

    const [hovered, setHovered] = useState(false);

    const springOverlay = useSpring({
        opacity: hovered ? 0 : 0.5,
    });

    const springUnderline = useSpring({
        width: hovered ? '100%' : '0%',
    });

    return (
        <div
            className="home-box project-box"
            onClick={() => {
                BulokeWindow.redirect(url);
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            {image && (
                <div className="image-container" style={box}>
                    {/* eslint-disable jsx-a11y/alt-text */}
                    <Image {...image} />
                    <a.div
                        className="image-overlay"
                        style={{ ...springOverlay, ...box }}
                    />
                </div>
            )}

            <div className="project-box-content">
                <div>
                    <a href={url}>
                        {name}
                        <a.div className="underline" style={springUnderline} />
                    </a>
                </div>
                {description}
            </div>
        </div>
    );
};

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="projects-container">
                {ProjectList.map(props => (
                    <Project key={props.id} {...props} />
                ))}
            </div>
        </div>
    );
};

const ProjectsBody = () => {
    return <Carousel />;
};

const Projects: FC = () => {
    return <Section sectionName={'Projects'} Content={ProjectsBody} />;
};

export default Projects;
