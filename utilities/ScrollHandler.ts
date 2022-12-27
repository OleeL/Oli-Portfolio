import { SpringRef, useSpring } from 'react-spring';

type IScrollFromTo = {
    target: number;
    current: number;
};

const calcuateY = (target: string): number =>
    document?.getElementById(target)?.offsetTop ?? 0;

const getScroll = (target: string): IScrollFromTo =>
    typeof window !== 'undefined'
        ? {
              target: calcuateY(target) ?? 0,
              current: window.scrollY,
          }
        : {
              target: 0,
              current: 0,
          };

interface IScrollProps {
    api: SpringRef<{ y: number }>;
    id: string;
}

export const goToSection = (props: IScrollProps) => {
    const { target, current } = getScroll(props.id);
    props.api.set({ y: current });
    props.api.start({ y: target });
};

export const useScrollSpring = () => {
    const [, api] = useSpring(() => ({
        y: 0,
        immediate: false,
        onChange: {
            y: (y: number) => {
                window.scroll(0, y);
            },
        },
    }));

    const stopAnimation = () => api.stop(true, 'y');

    if (typeof window !== 'undefined') {
        document.addEventListener('wheel', stopAnimation);
        document.addEventListener('mousedown', stopAnimation);
        document.addEventListener('keydown', stopAnimation);
        document.addEventListener('touchstart', stopAnimation);
    }

    return api;
};
