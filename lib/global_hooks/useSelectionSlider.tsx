import { CSSProperties, useEffect, useRef, useState, FC, useMemo } from 'react';
import { a, useSpring } from 'react-spring';
import { useWindowWidth } from './window';
import styles from '../../styles/variables.module.scss';

interface IProps {
    selection: any;
    activeKey?: string;
    className?: string;
    triggerFunc?: (props?: any) => void;
}

const defaultSettings: CSSProperties = {
    position: 'absolute',
};

type ISlider = {
    className: string;
    isHorizontal: boolean;
    top: number;
    left: number;
    backdropHeight: number;
    spring: any;
    width: number;
    height: number;
};
export const Slider: FC<ISlider> = ({
    className,
    isHorizontal,
    top,
    left,
    backdropHeight,
    spring,
    width,
    height,
}) =>
    (!isHorizontal && (
        <>
            <div
                className={`${className} backdrop`}
                style={{
                    ...defaultSettings,
                    height: backdropHeight,
                    top,
                    left,
                }}
            />
            <a.div
                className={className}
                style={{
                    ...spring,
                    ...defaultSettings,
                    height,
                    width,
                }}
            />
        </>
    )) || <></>;

export const useSelectionSlider = ({
    activeKey = 'active',
    className = 'selection-slider',
    selection,
}: IProps) => {
    const sliderWidth = 3;
    const width = useWindowWidth();
    const isHorizontal = width <= parseFloat(styles.mediaMaxWidth);

    const ref = useRef<HTMLUListElement>(null);
    const [, updateState] = useState<any>();
    const forceUpdate = () => updateState({});
    useEffect(() => forceUpdate(), [ref, selection]);

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
    const sliderProps = useMemo(() => {
        const backdropHeight = isHorizontal
            ? sliderWidth
            : child?.parentElement?.offsetHeight ?? 0;
        const backdropTop = isHorizontal
            ? (child?.offsetTop ?? 0) + (child?.offsetHeight ?? 0)
            : child?.parentElement?.offsetTop ?? 0;
        return {
            className,
            isHorizontal,
            top: backdropTop,
            left,
            backdropHeight,
            height,
            spring,
            width: sliderWidth,
        };
    }, [selection, width]);

    return { ref, sliderProps };
};
