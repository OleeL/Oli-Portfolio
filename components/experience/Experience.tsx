import moment from 'moment';
import { FC, Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { a } from 'react-spring';
import { experiences } from './Experiences';
import { Tag } from '../Tag';
import { ExperienceType } from '../../lib/types';
import { useFadeReset } from '../../lib/global_hooks';
import {
    Slider,
    useSelectionSlider,
} from '../../lib/global_hooks/useSelectionSlider';
import useExperience from './hooks/useExperience';
import Section from '../Section';

const Footnote: FC<{ children: any }> = ({ children }) => {
    return <p className="footnote">{children}</p>;
};

const ExperienceDescription = ({
    experience,
}: {
    experience: ExperienceType;
}) => {
    const { startDate, endDate, company, role, description, location, tags } =
        experience;
    const fade = useFadeReset(
        {
            opacity: 1,
            scale: 1,
            from: { opacity: 0, scale: 0.95 },
            config: { tension: 50, mass: 1, clamp: true, friction: 10 },
        },
        [],
    );

    return (
        <a.div style={fade} className="fit-content" key={experience.company}>
            <div className="experience-description">
                <h4>
                    {company} <span>{role}</span>
                </h4>
                <Footnote>
                    <span>
                        <FontAwesomeIcon icon={['fas', 'calendar']} />{' '}
                        {moment(startDate).format('MM/YYYY')} -{' '}
                        {endDate ? moment(endDate)?.format('MM/YYYY') : 'Now'}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={['fas', 'location-dot']} />{' '}
                        <a
                            href={location.url}
                            target={'_blank'}
                            rel="noreferrer">
                            {location.name}
                        </a>
                    </span>
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
    return (
        <li
            className={`list-element pointer${active ? ' active' : ''}`}
            onClick={() => setExperience(experience)}>
            {experience?.companyNickname ?? company}
        </li>
    );
};

const ExperienceBody = () => {
    const { experience, setExperience } = useExperience();
    const { ref, sliderProps } = useSelectionSlider({
        selection: experience,
    });

    return (
        <>
            <div className="experience-container">
                <div className="home-box-experience">
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
                    <ExperienceDescription experience={experience} />
                </div>
            </div>
            <Slider {...sliderProps} />
        </>
    );
};

const Experience: FC = () => {
    return <Section sectionName={'Experience'} content={ExperienceBody} />;
};

export default Experience;
