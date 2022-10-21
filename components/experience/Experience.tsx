import { FC, useState } from 'react';
import { a, useSpring } from 'react-spring';
import useSelectionSlider from '../../lib/global_hooks/useSelectionSlider';
import Section from '../Section';
import experiences from './Experiences';
import useExperience from './hooks/useExperience';

const ExperienceBody = () => {
    const { experience, setExperience } = useExperience(experiences[0]);
    const { ref, Slider } = useSelectionSlider({ selection: experience });
    return (
        <>
            <p>Experiences: </p>
            <ul ref={ref} className="experience-list">
                {experiences.map((x, key) => {
                    const active = experience.company === x.company;
                    const [hovered, setHovered] = useState<boolean>(false);
                    const rowSpring = useSpring({
                        backgroundColor: hovered ? '#FFFFFF' : '#00000000',
                        config: { mass: 10, tension: 400, friction: 40, clamp: true },
                    });
                    return (
                        <a.li
                            className={`list-element pointer${active ? ' active' : ''}`}
                            key={key}
                            onMouseOver={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            style={rowSpring}
                            onClick={() => setExperience({ ...x })}>
                            {x.company}
                        </a.li>
                    );
                })}
            </ul>
            <Slider />
        </>
    );
};

const Experience: FC = () => {
    return <Section sectionName={'Experience'} Content={ExperienceBody} />;
};

export default Experience;
