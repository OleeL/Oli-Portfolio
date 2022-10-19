import { FC } from 'react';
import Section from '../Section';
import experiences from './Experiences';
import useExperience from './hooks/useExperience';

const ExperienceBody = () => {
    const { experience, setExperience } = useExperience(experiences[0]);
    return (
        <>
            <p>Experiences: </p>

            <ul>
                {experiences.map((x, key) => {
                    const active = experience.company === x.company;
                    return (
                        <li
                            className={active ? 'active' : ''}
                            key={key}
                            onClick={() => setExperience(x)}>
                            {x.company}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

const Experience: FC = () => {
    return <Section sectionName={'Experience'} body={<ExperienceBody />} />;
};

export default Experience;
