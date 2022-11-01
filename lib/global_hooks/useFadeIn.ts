import { RefObject, useEffect, useRef, useState } from 'react';
import { useSpring, UseSpringProps, useSprings } from 'react-spring';

type FadeProps = {
    delay?: number;
    initialDelay?: number;
};

type FadePropsArr = FadeProps & {
    length: number;
};

export const useFadeIn = (props?: FadeProps | UseSpringProps) =>
    useSpring({
        opacity: 1,
        transform: 'translate(0px, 0px)',
        from: { opacity: 0, transform: 'translate(-10px, -20px)' },
        ...props,
    });

export const useFadeReset = (props: UseSpringProps, deps: readonly any[]) => {
    const [fade, animate] = useSpring(
        {
            opacity: 1,
            transform: 'translate(0px, 0px)',
            from: { opacity: 0, transform: 'translate(-10px, -20px)' },
            ...props,
        },
        [],
    );
    useEffect(() => {
        animate.start({ reset: true });
    }, [deps]);

    return fade;
};

const getDefaultFadeProps = ({
    length,
    delay = 100,
    initialDelay = 0,
}: FadePropsArr): Required<FadePropsArr> => {
    return { length, delay, initialDelay };
};

export const useFadeInArr = (props: FadePropsArr | number) => {
    const { length, delay, initialDelay } =
        typeof props !== 'number'
            ? getDefaultFadeProps(props)
            : getDefaultFadeProps({ length: props });
    return useSprings(length, index => ({
        opacity: 1,
        transform: 'translate(0px, 0px)',
        delay: initialDelay + index * delay,
        from: { opacity: 0, transform: 'translate(-10px, -20px)' },
    }));
};

type FadeInIfVisible = {
    ref: RefObject<any>;
    isVisible: boolean;
    fade: ReturnType<typeof useFadeIn>;
};

export const useFadeInIfVisible = (props?: FadeProps): FadeInIfVisible => {
    const [isVisible, setVisible] = useState(false);
    const ref = useRef();
    useEffect(() => {
        if (!ref.current) {
            return () => {};
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        if (isVisible) {
            observer.unobserve(ref.current);
        }
        return () => {
            if (ref?.current) observer.unobserve(ref.current);
        };
    }, []);

    const fade = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0px, 0px)' : 'translate(-10px, -20px)',
        config: { mass: 70, tension: 1000, friction: 700 },
        ...props,
    });
    return { ref, isVisible, fade };
};

export default useFadeIn;
