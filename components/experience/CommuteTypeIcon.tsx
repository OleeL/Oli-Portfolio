import {
	faHome,
	faBuilding,
	faLaptop,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { COMMUTE_TYPE } from '../../lib/constants/commuteType';
import { CommuteType } from '../../lib/types';

const CommuteTypeIcon = ({ commuteType }: { commuteType: CommuteType }) => {
	if (commuteType === COMMUTE_TYPE.remote) {
		return <FontAwesomeIcon icon={faHome} />;
	}
	if (commuteType === COMMUTE_TYPE.inOffice) {
		return <FontAwesomeIcon icon={faBuilding} />;
	}
	return <FontAwesomeIcon icon={faLaptop} />;
};

export default CommuteTypeIcon;
