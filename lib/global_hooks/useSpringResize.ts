import { useEffect, useRef, useState } from 'react';
import { useSpring } from 'react-spring';
import { BulokeWindow } from '../helpers/window';

const getRefPropertiesHeight = <T extends HTMLElement>(current: T | null) => {
    if (!BulokeWindow.isBrowser() || !current) {
        return 0;
    }
    const { marginTop, marginBottom, paddingTop, paddingBottom } =
        window.getComputedStyle(current);

    const { clientHeight } = current;

    const sum = [marginTop, marginBottom, paddingTop, paddingBottom].reduce(
        (acc, x) => parseFloat(x) + acc,
        0,
    );
    return clientHeight + sum;
};

export const useSpringResizeHeight = <T extends HTMLElement>(
    extraHeight: number,
) => {
    const ref = useRef<T | null>(null);
    const minHeightRef = useRef<any | null>(null);

    const getHeight = () =>
        minHeightRef?.current
            ? Math.max(
                  getRefPropertiesHeight(minHeightRef.current) + 20,
                  getRefPropertiesHeight(ref.current),
              )
            : getRefPropertiesHeight(ref.current);

    const [height, setHeight] = useState(0);
    const heightReset = () => setHeight(getHeight());

    useEffect(() => setHeight(getHeight()), []);
    // useWindowResize(() => setHeight(getHeight()));

    const style = useSpring({
        height: `${height + extraHeight}px`,
    });

    return { ref, style, minHeightRef, heightReset };
};
