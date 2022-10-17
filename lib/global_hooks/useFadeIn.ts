import { useSpring } from 'react-spring';

type FadeProps = {
    delay?: number;
    initialDelay?: number;
};

type FadePropsArr = FadeProps & {
    length: number;
};

export const useFadeIn = (props?: FadeProps) =>
    useSpring({
        opacity: 1,
        transform: 'translate(0px, 0px)',
        from: { opacity: 0, transform: 'translate(-10px, -20px)' },
        ...props,
    });

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
    const springs = Array(length);
    for (let i = 0; i < length; i++) {
        springs[i] = useSpring({
            opacity: 1,
            transform: 'translate(0px, 0px)',
            delay: initialDelay + i * delay,
            from: { opacity: 0, transform: 'translate(-10px, -20px)' },
        });
    }
    return springs;
};

export default useFadeIn;
