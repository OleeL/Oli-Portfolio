import { useEffect, useState } from 'react';
import { BulokeWindow } from '../helpers/window';

type IWidthHeight = {
    width: number;
    height: number;
};

export const useWindowSize = (): IWidthHeight => {
    const [windowSize, setWindowSize] = useState<IWidthHeight>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (!BulokeWindow.isBrowser()) return () => {};
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

export const useWindowResize = (func: () => void) =>
    useEffect(() => {
        if (!BulokeWindow.isBrowser()) return () => {};
        window.addEventListener('resize', func);
        return () => window.removeEventListener('resize', func);
    }, []);
