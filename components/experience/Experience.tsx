import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { FC, useState } from 'react';
import useSelectionSlider from '../../lib/global_hooks/useSelectionSlider';
import Section from '../Section';
import experiences from './Experiences';
import useExperience from './hooks/useExperience';

const Footnote: FC<{ children: any }> = ({ children }) => {
    return <p className="footnote">{children}</p>;
};
const ExperienceBody = () => {
    const { experience, setExperience } = useExperience(experiences[0]);
    const { ref, Slider } = useSelectionSlider({ selection: experience });

    const { startDate, endDate, company, role, description, location } = experience;
    return (
        <>
            <p>Experiences: </p>
            <div className="experience-container">
                <div className="experience-box">
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
                    <div className="experience-description">
                        <h4>
                            &gt; {company} | <span>{role}</span>
                        </h4>
                        <Footnote>
                            <FontAwesomeIcon icon={['fas', 'calendar']} />{' '}
                            {moment(startDate).format('MM/YY')} -{' '}
                            {endDate ? moment(endDate)?.format('MM/YY') : 'Now'}
                            {' | '}
                            <FontAwesomeIcon icon={['fas', 'location-dot']} />{' '}
                            <a href={location.url}>{location.name}</a>
                        </Footnote>
                        <div className="description">{description}</div>
                    </div>
                </div>
            </div>
            <Slider />
        </>
    );
};

const Experience: FC = () => {
    return <Section sectionName={'Experience'} Content={ExperienceBody} />;
};

export default Experience;
