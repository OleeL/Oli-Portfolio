import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { a, useSpring } from 'react-spring';
import { useWindowSize } from './window';
import styles from '../../styles/variables.module.scss';

interface IProps {
    selection: any;
    activeKey?: string;
    className?: string;
}

const defaultSettings: CSSProperties = {
    position: 'absolute',
};

export const useSelectionSlider = ({
    activeKey = 'active',
    className = 'selection-slider',
    selection,
}: IProps) => {
    const ref = useRef<HTMLUListElement>(null);
    const [, updateState] = useState<any>();
    const forceUpdate = useCallback(() => updateState({}), []);
    useEffect(() => {
        window.addEventListener('resize', forceUpdate);
    }, []);
    useEffect(() => {
        forceUpdate();
    }, [ref, selection]);

    const sliderWidth = 3;

    const { width } = useWindowSize();
    const isHorizontal = width < parseFloat(styles.mediaMaxWidth);

    const children = Object.values(
        ref?.current?.childNodes ?? [],
    ) as HTMLElement[];
    const index =
        children?.findIndex(x => x.className?.includes(activeKey)) ?? 0;
    const child = children[index] ?? null;

    const height = child?.getBoundingClientRect()?.height ?? 0;
    const left = (child?.offsetLeft ?? 0) - 2;
    const spring = useSpring({
        top: child?.offsetTop ?? 0,
        left,
    });

    const backdropHeight = isHorizontal
        ? sliderWidth
        : child?.parentElement?.offsetHeight ?? 0;
    const backdropTop = isHorizontal
        ? (child?.offsetTop ?? 0) + (child?.offsetHeight ?? 0)
        : child?.parentElement?.offsetTop ?? 0;

    const Slider = () => (
        <>
            <div
                className={`${className} backdrop`}
                style={{
                    ...defaultSettings,
                    height: backdropHeight,
                    top: backdropTop,
                    left,
                }}
            />
            <a.div
                className={className}
                style={{
                    ...spring,
                    ...defaultSettings,
                    height,
                    width: sliderWidth,
                }}
            />
        </>
    );

    return { ref, Slider };
};
