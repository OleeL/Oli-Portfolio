import { ReactNode } from 'react';
import { TagType } from '../../components/Tag';
import { COMMUTE_TYPE } from '../constants/commuteType';
import { ObjectValues } from './helper';

type Location = {
	url: string;
	name: string;
};

export type CommuteType = ObjectValues<typeof COMMUTE_TYPE>;

export type ExperienceType = {
	id: number;
	company: string;
	companyNickname?: string;
	role: string;
	startDate: Date;
	endDate: Date | null;
	description: ReactNode;
	url: string;
	location: Location;
	tags: TagType[];
	commuteType: CommuteType;
};

export default ExperienceType;
