import { FC, ReactElement } from 'react';
import { a } from 'react-spring';
import { useFadeInIfVisible } from '../lib/global_hooks/useFadeIn';
import { toKebabCase } from '../lib/helpers/string';

interface ISection {
    sectionName: string;
    body: ReactElement<any>;
}

const Section: FC<ISection> = ({ sectionName, body }) => {
    const { fade, ref } = useFadeInIfVisible();

    return (
        <a.section ref={ref} id={toKebabCase(sectionName)} style={fade}>
            <div className="fill-width">
                <div className="section-content">
                    <h3 className="section-heading divider">{sectionName}</h3>
                </div>
                {body}
            </div>
        </a.section>
    );
};

export default Section;
