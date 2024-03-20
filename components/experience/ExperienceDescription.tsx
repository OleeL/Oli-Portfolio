import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { a } from 'react-spring';
import { useFadeReset } from '../../lib/global_hooks';
import { ExperienceType } from '../../lib/types';
import Footnote from './Footnote';
import CommuteTypeIcon from './CommuteTypeIcon';
import Tag from '../Tag';

const ExperienceDescription = ({
	experience,
}: {
	experience: ExperienceType;
}) => {
	const {
		startDate,
		endDate,
		company,
		role,
		description,
		location,
		tags,
		commuteType,
	} = experience;
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
		<a.div style={fade} className="fit-content" key={company}>
			<div className="experience-description">
				<h3>
					{company} <span>{role}</span>
				</h3>
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
					<span>
						<CommuteTypeIcon commuteType={commuteType} />
						{commuteType}
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

export default ExperienceDescription;
