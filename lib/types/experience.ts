import { ReactElement } from 'react';

type Location = {
    url: string;
    name: string;
};

type Tag = {
    name: string;
};

export type ExperienceType = {
    id: number;
    company: string;
    role: string;
    startDate: Date;
    endDate: Date | null;
    description: ReactElement<any>;
    url: string;
    location: Location;
    tags: Tag[];
};

export default ExperienceType;
