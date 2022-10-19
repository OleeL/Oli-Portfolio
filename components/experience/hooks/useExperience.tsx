import { useState } from 'react';
import { Experience } from '../../../lib/types';

const useExperience = (initExperience: Experience) => {
    const [experience, setExperience] = useState<Experience>(initExperience);

    return { experience, setExperience };
};

export default useExperience;
