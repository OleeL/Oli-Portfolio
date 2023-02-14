import { useState } from 'react';
import { ExperienceType } from '../../../lib/types';
import { experiences } from '../Experiences';

const useExperience = () => {
    const [experience, setExperience] = useState<ExperienceType>(
        experiences[0],
    );

    return { experience, setExperience };
};

export default useExperience;
