import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { FC, useState, useRef, DetailedHTMLProps, HTMLAttributes } from 'react';
import { a, useSpring } from 'react-spring';
import useSelectionSlider from '../../lib/global_hooks/useSelectionSlider';
import Section from '../Section';
import experiences from './Experiences';
import useExperience from './hooks/useExperience';
import { Tag } from '../Tag';
import { useSpringResizeHeight } from '../../lib/global_hooks/useSpringResize';

const Footnote: FC<{ children: any }> = ({ children }) => {
    return <p className="footnote">{children}</p>;
};
const ExperienceBody = () => {
    const { experience, setExperience } = useExperience(experiences[0]);
    const { ref, Slider } = useSelectionSlider({ selection: experience });

    const { startDate, endDate, company, role, description, location, tags } = experience;

    const { ref: springRef, style } = useSpringResizeHeight<HTMLDivElement>();

    return (
        <>
            <a.div className="experience-container">
                <a.div style={style} className="experience-box">
                    <div className="experience-list-divider-container">
                        <ul ref={ref} className="experience-list">
                            {experiences.map((x, key) => {
                                const active = company === x.company;
                                const [hovered, setHovered] = useState<boolean>(false);
                                return (
                                    <li
                                        className={`list-element pointer${active ? ' active' : ''}`}
                                        key={key}
                                        onMouseOver={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                        style={{
                                            backgroundColor: hovered ? '#FFFFFF' : '#00000000',
                                        }}
                                        onClick={() => setExperience({ ...x })}>
                                        {x.company}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="fit-content" ref={springRef}>
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
                                <a href={location.url}>{location.name}</a>
                            </Footnote>
                            <div className="description">{description}</div>
                        </div>
                        <div className="tag-row">
                            {tags.map(({ name }, k) => (
                                <Tag key={k} className="tag" name={name} />
                            ))}
                        </div>
                    </div>
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
