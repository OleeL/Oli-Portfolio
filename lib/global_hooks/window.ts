import { useEffect, useState } from 'react';

type IWidthHeight = {
    width?: number;
    height?: number;
};

export const isBrowser = () => typeof window !== 'undefined';

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<IWidthHeight>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (isBrowser()) return () => {};
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
};

export default useWindowSize;
