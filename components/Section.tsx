import { FC, ReactNode } from 'react';
import { a } from 'react-spring';
import { useFadeInIfVisible } from '../lib/global_hooks/useFadeIn';
import { toKebabCase } from '../lib/helpers/string';
import { Fade } from '../lib/providers/fade';

interface ISection {
	sectionName: string;
	children: ReactNode;
}

const Section: FC<ISection> = ({ sectionName, children }) => {
	const { fade, ref } = useFadeInIfVisible();

	return (
		<a.section ref={ref} id={toKebabCase(sectionName)} style={fade}>
			<div className="fill-width">
				<div className="section-content">
					<h2 className="section-heading divider">{sectionName}</h2>
				</div>

				<Fade.Provider value={fade}>{children}</Fade.Provider>
			</div>
		</a.section>
	);
};

export default Section;
