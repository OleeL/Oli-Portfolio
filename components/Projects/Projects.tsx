import { FC, useState } from 'react';
import Image from 'next/image';
import { a, useSpring } from 'react-spring';
import Section from '../Section';
import { Project, ProjectList } from './ProjectList';
import { BulokeWindow } from '../../lib/helpers/window';

// type DragEvent = {
//     isDragging: boolean;
//     x: number | undefined;
// };

// const CarouselContainerContent = () => {
//     const initDragState = { isDragging: false, x: undefined };
//     const [dragEvent, setDragEvent] = useState<DragEvent>(initDragState);
//     const [x, setX] = useState<number | undefined>(undefined);

//     const mouseDown = ({ clientX }: MouseEvent<HTMLDivElement>) => {
//         setDragEvent({ isDragging: true, x: clientX });
//     };

//     useEffect(() => {
//         const mouseUp = () => {
//             setDragEvent({ x: dragEvent.x, isDragging: false });
//         };

//         const mouseMove = (ev: { clientX: number }): any => {
//             if (!dragEvent.isDragging) return;
//             setX(ev.clientX - (dragEvent?.x ?? 0) + (x ?? 0));
//         };

//         const removeEventListeners = () => {
//             if (BulokeWindow.isBrowser()) {
//                 window.removeEventListener('mouseup', mouseUp);
//                 window.removeEventListener('mousemove', mouseMove);
//             }
//         };

//         if (BulokeWindow.isBrowser()) {
//             removeEventListeners();
//             window.addEventListener('mouseup', mouseUp);
//             window.addEventListener('mousemove', mouseMove);
//         }

//         return () => removeEventListeners();
//     }, [dragEvent]);

//     return (
//         <div>
//             <div style={{ left: x }} className="projects-container" onMouseDown={mouseDown}>
//                 {ProjectList.map(({ id, url, name, description }) => (
//                     <div key={id} className="home-box project-box">
//                         <>
//                             <a href={url}>{name}</a>
//                             {description}
//                         </>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

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
