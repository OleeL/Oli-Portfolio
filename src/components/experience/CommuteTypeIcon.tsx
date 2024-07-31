import {
	faHome,
	faBuilding,
	faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COMMUTE_TYPE } from '../../lib/constants/commuteType';
import { CommuteType } from '../../lib/types';

const CommuteTypeIcon = ({ commuteType }: { commuteType: CommuteType }) => {
	switch (commuteType) {
		case COMMUTE_TYPE.remote:
			return <FontAwesomeIcon icon={faHome} />;
		case COMMUTE_TYPE.inOffice:
			return <FontAwesomeIcon icon={faBuilding} />;
		default:
			return <FontAwesomeIcon icon={faLaptop} />;
	}
};

export default CommuteTypeIcon;
