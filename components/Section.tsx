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
        <section ref={ref} id={toKebabCase(sectionName)}>
            <a.div className="overflow fill-width" style={fade}>
                <div className="section-content">
                    <h3 className="section-heading divider">{sectionName}</h3>
                </div>
                {body}
            </a.div>
        </section>
    );
};

export default Section;
