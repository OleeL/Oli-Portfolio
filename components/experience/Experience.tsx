import moment from 'moment';
import {
    FC,
    RefObject,
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
} from 'react';
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
import { isBrowser } from '../../lib/helpers/window';
import styles from '../../styles/variables.module.scss';
import { useWindowSize } from '../../lib/global_hooks/window';

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
    const { startDate, endDate, company, role, description, location, tags } =
        experience;
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
        <a.div
            style={fade}
            className="fit-content"
            ref={springRef}
            key={experience.company}>
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
                    <a href={location.url} target={'_blank'} rel="noreferrer">
                        {location.name}
                    </a>
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

const getExtraHeight = (elementId: string): number => {
    if (!isBrowser()) return 0;

    const el = document.getElementById(elementId);
    if (!el) return 0;
    const height = el.getBoundingClientRect()?.height ?? 0;
    return (
        height +
        [
            el.style.marginTop,
            el.style.marginBottom,
            el.style.paddingTop,
            el.style.paddingBottom,
        ].reduce((acc, x) => {
            const val = parseFloat(x);
            if (Number.isNaN(val)) {
                return acc;
            }
            return val + acc;
        }, 0)
    );
};

const ExperienceBody = () => {
    const { experience, setExperience } = useExperience(experiences[0]);
    const { width } = useWindowSize();

    const isScreenSmall = (width ?? 0) < parseFloat(styles.mediaMaxWidth);
    const getHeight = () =>
        isScreenSmall
            ? getExtraHeight('experience-list-divider-container') + 10
            : 0;
    const [height, setHeight] = useState(0);

    useEffect(() => setHeight(getHeight()), [experience, isScreenSmall]);

    const {
        ref: springRef,
        style,
        minHeightRef,
        heightReset,
    } = useSpringResizeHeight<HTMLDivElement>(height);
    const { ref, Slider } = useSelectionSlider({
        selection: experience,
        triggerFunc: () => {
            heightReset();
        },
    });

    useEffect(() => {
        minHeightRef.current = ref.current;
    }, [ref.current]);

    return (
        <>
            <a.div className="experience-container">
                <a.div style={style} className="home-box-experience">
                    <div
                        className="experience-list-divider-container"
                        id="experience-list-divider-container">
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
                    <ExperienceDescription
                        springRef={springRef}
                        experience={experience}
                    />
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
