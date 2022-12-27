import { useState } from 'react';
import { ExperienceType } from '../../../lib/types';

const useExperience = (initExperience: ExperienceType) => {
    const [experience, setExperience] =
        useState<ExperienceType>(initExperience);

    return { experience, setExperience };
};

export default useExperience;
