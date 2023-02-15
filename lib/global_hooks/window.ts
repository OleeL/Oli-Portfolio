import { useEffect, useState } from 'react';
import { BulokeWindow } from '../helpers/window';

type IWidth = { width: number };
type IHeight = { height: number };
type IWindowSize = IWidth & IHeight;

export const useWindowResize = (func: () => void) =>
    useEffect(() => {
        if (!BulokeWindow.isBrowser()) return () => {};
        window.addEventListener('resize', func);
        return () => window.removeEventListener('resize', func);
    }, []);

export const useWindowWidth = (): number => {
    const [width, setWidth] = useState<number>(0);
    const handleResizeWidth = () => {
        const newWidth = window.innerWidth;
        if (newWidth === width) return;
        setWidth(newWidth);
    };
    useWindowResize(handleResizeWidth);
    useEffect(() => handleResizeWidth());
    return width;
};

export const useWindowHeight = (): number => {
    const [height, setHeight] = useState<number>(0);
    const handleResizeHeight = () => {
        const newHeight = window.innerHeight;
        if (newHeight === height) return;
        setHeight(newHeight);
    };
    useWindowResize(handleResizeHeight);
    useEffect(() => handleResizeHeight());
    return height;
};

export const useWindowSize = (): IWindowSize => {
    const [windowSize, setWindowSize] = useState<IWindowSize>({
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
