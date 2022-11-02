import moment from 'moment';
import { FC, RefObject, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { a } from 'react-spring';
import { experiences } from './Experiences';
import { Tag } from '../Tag';
import { useSpringResizeHeight } from '../../lib/global_hooks/useSpringResize';
import { ExperienceType } from '../../lib/types';
import { useFadeReset } from '../../lib/global_hooks';
import { useSelectionSlider } from '../../lib/global_hooks/useSelectionSlider';
import useExperience from './hooks/useExperience';
import Section from '../Section';
import { nextOpen } from '../../lib/helpers/window';

const Footnote: FC<{ children: any }> = ({ children }) => {
    return <p className="footnote">{children}</p>;
};

const ExperienceDescription = <T extends HTMLDivElement>({
    springRef,
    experience,
}: {
    springRef: RefObject<T>;
    experience: ExperienceType;
}) => {
    const { startDate, endDate, company, role, description, location, tags } = experience;
    const fade = useFadeReset(
        {
            opacity: 1,
            scale: 1,
            from: { opacity: 0, scale: 0.95 },
            config: { tension: 50, mass: 1, clamp: true, friction: 10 },
        },
        [experience],
    );
    return (
        <a.div style={fade} className="fit-content" ref={springRef} key={experience.company}>
            <div className="experience-description">
                <h4>
                    &gt; {company} | <span>{role}</span>
                </h4>
                <Footnote>
                    <FontAwesomeIcon icon={['fas', 'calendar']} />{' '}
                    {moment(startDate).format('MM/YYYY')} -{' '}
                    {endDate ? moment(endDate)?.format('MM/YYYY') : 'Now'}
                    {' | '}
                    <FontAwesomeIcon icon={['fas', 'location-dot']} />{' '}
                    <a onClick={() => nextOpen(location.url, '_blank')?.focus()}>{location.name}</a>
                </Footnote>
                <div className="description">{description}</div>
            </div>
            <div className="tag-row">
                {tags.map(tag => (
                    <Tag key={tag.id} className="tag" tag={tag} />
                ))}
            </div>
        </a.div>
    );
};

interface IExperienceListElement {
    experience: ExperienceType;
    selectedExperience: ExperienceType;
    setExperience: Dispatch<SetStateAction<ExperienceType>>;
}
const ExperienceListElement: FC<IExperienceListElement> = ({
    experience,
    selectedExperience,
    setExperience,
}) => {
    const { company } = experience;
    const active = company === selectedExperience.company;
    const [hovered, setHovered] = useState<boolean>(false);
    return (
        <li
            className={`list-element pointer${active ? ' active' : ''}`}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: hovered ? '#FFFFFF' : '#00000000',
            }}
            onClick={() => setExperience(experience)}>
            {company}
        </li>
    );
};

const ExperienceBody = () => {
    const { experience, setExperience } = useExperience(experiences[0]);
    const { ref, Slider } = useSelectionSlider({ selection: experience });
    const { ref: springRef, style, minHeightRef } = useSpringResizeHeight<HTMLDivElement>();

    useEffect(() => {
        minHeightRef.current = ref.current;
    }, [ref.current]);

    return (
        <>
            <a.div className="experience-container">
                <a.div style={style} className="home-box">
                    <div className="experience-list-divider-container">
                        <ul ref={ref} className="experience-list">
                            {experiences.map(x => (
                                <ExperienceListElement
                                    key={x.id}
                                    setExperience={setExperience}
                                    experience={x}
                                    selectedExperience={experience}
                                />
                            ))}
                        </ul>
                    </div>
                    <ExperienceDescription springRef={springRef} experience={experience} />
                </a.div>
            </a.div>
            <Slider />
        </>
    );
};

const Experience: FC = () => {
    return <Section sectionName={'Experience'} Content={ExperienceBody} />;
};

export default Experience;
