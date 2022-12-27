import { FC } from 'react';
import Section from '../Section';
import { ProjectList } from './ProjectList';

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
//             if (isBrowser()) {
//                 window.removeEventListener('mouseup', mouseUp);
//                 window.removeEventListener('mousemove', mouseMove);
//             }
//         };

//         if (isBrowser()) {
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

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="projects-container">
                {ProjectList.map(({ id, url, name, description }) => (
                    <div key={id} className="home-box project-box">
                        <>
                            <a href={url}>{name}</a>
                            {description}
                        </>
                    </div>
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
