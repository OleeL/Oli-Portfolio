'use client';

import { Dispatch, SetStateAction, FC } from 'react';
import { ExperienceType } from '../../lib/types';

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
		<li className={`${active ? ' active' : ''}`}>
			<button
				className="list-element pointer"
				onKeyDown={e => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						setExperience(experience);
					}
				}}
				onClick={() => setExperience(experience)}>
				{experience?.companyNickname ?? company}
			</button>
		</li>
	);
};

export default ExperienceListElement;
