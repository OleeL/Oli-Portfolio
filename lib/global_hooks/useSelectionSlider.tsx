import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { a, useSpring } from 'react-spring';

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

    const children = Object.values(ref?.current?.childNodes ?? []) as HTMLElement[];
    const index = children?.findIndex(x => x.className?.includes(activeKey)) ?? 0;
    const child = children[index] ?? null;

    const height = child?.getBoundingClientRect()?.height ?? 0;
    const left = child?.offsetLeft ?? 0;
    const spring = useSpring({
        top: child?.offsetTop ?? 0,
        left,
    });

    const backdropHeight = child?.parentElement?.offsetHeight ?? 0;

    const Slider = () => (
        <>
            <div
                className={`${className} backdrop`}
                style={{
                    ...defaultSettings,
                    height: backdropHeight,
                    top: child?.parentElement?.offsetTop ?? 0,
                    left,
                }}
            />
            <a.div className={className} style={{ ...spring, ...defaultSettings, height }} />
        </>
    );

    return { ref, Slider };
};

export default useSelectionSlider;
