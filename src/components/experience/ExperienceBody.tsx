'use client';

import {
	useSelectionSlider,
	Slider,
} from '../../lib/global_hooks/useSelectionSlider';
import ExperienceDescription from './ExperienceDescription';
import ExperienceListElement from './ExperienceListElement';
import { experiences } from './constants/Experiences';
import useExperience from './hooks/useExperience';

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

export default ExperienceBody;
