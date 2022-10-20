import { useEffect, useRef, useState } from 'react';
import { a, useSpring } from 'react-spring';

interface IProps {
    selection: any;
    activeKey?: string;
    className?: string;
}

export const useSelectionSlider = ({
    activeKey = 'active',
    className = 'selection-slider',
    selection,
}: IProps) => {
    const ref = useRef<HTMLUListElement>(null);
    const [refChange, setRefChange] = useState(false);

    useEffect(() => {
        setRefChange(!refChange);
    }, [ref, selection]);

    const children = Object.values(ref?.current?.childNodes ?? []) as HTMLElement[];
    const index = children?.findIndex(x => x.className?.includes(activeKey)) ?? 0;
    const child = children[index] ?? null;

    const height = child?.getBoundingClientRect()?.height ?? 0;
    const spring = useSpring({
        top: child?.offsetTop ?? 0,
    });
    const Slider = () => (
        <a.div className={className} style={{ ...spring, height, position: 'absolute', left: 0 }} />
    );

    return { ref, Slider };
};

export default useSelectionSlider;
