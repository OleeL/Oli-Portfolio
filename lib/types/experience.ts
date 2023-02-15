import { ReactElement } from 'react';
import { TagType } from '../../components/Tag';

type Location = {
    url: string;
    name: string;
};

export type ExperienceType = {
    id: number;
    company: string;
    companyNickname?: string;
    role: string;
    startDate: Date;
    endDate: Date | null;
    description: ReactElement<any>;
    url: string;
    location: Location;
    tags: TagType[];
};

export default ExperienceType;
