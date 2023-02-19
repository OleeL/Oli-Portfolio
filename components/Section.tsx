import { FC } from 'react';
import { a } from 'react-spring';
import { useFadeInIfVisible } from '../lib/global_hooks/useFadeIn';
import { toKebabCase } from '../lib/helpers/string';

interface ISection {
    sectionName: string;
    content: FC<{ fade: any }>;
}

const Section: FC<ISection> = ({ sectionName, content: Content }) => {
    const { fade, ref } = useFadeInIfVisible();

    return (
        <a.section ref={ref} id={toKebabCase(sectionName)} style={fade}>
            <div className="fill-width">
                <div className="section-content">
                    <h2 className="section-heading divider">{sectionName}</h2>
                </div>
                <Content fade={fade} />
            </div>
        </a.section>
    );
};

export default Section;
