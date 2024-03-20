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
		<li
			className={`list-element pointer${active ? ' active' : ''}`}
			onClick={() => setExperience(experience)}>
			{experience?.companyNickname ?? company}
		</li>
	);
};

export default ExperienceListElement;
