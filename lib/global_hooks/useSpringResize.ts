import { useRef } from 'react';
import { useSpring } from 'react-spring';
import { isBrowser } from './window';

const getRefPropertiesHeight = <T extends HTMLElement>(current: T | null) => {
    if (!isBrowser() || !current) {
        return 1;
    }
    const { marginTop, marginBottom, paddingTop, paddingBottom } = window.getComputedStyle(current);

    const { clientHeight } = current;

    const sum = [marginTop, marginBottom, paddingTop, paddingBottom].reduce(
        (acc, x) => parseFloat(x) + acc,
        0,
    );
    return clientHeight + sum;
};

export const useSpringResizeHeight = <T extends HTMLElement>() => {
    const ref = useRef<T>(null);

    const style = useSpring({
        height: `${getRefPropertiesHeight(ref.current)}px`,
    });

    return { ref, style };
};
