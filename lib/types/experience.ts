import { ReactElement } from 'react';

type Location = {
    url: string;
    name: string;
};

export type Experience = {
    company: string;
    role: string;
    startDate: Date;
    endDate: Date | null;
    description: ReactElement<any>;
    url: string;
    location: Location;
};

export default Experience;
