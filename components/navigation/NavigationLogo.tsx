import { useEffect, useMemo, useState } from 'react';
import { a, useSpring } from 'react-spring';

const MIN = 16;
const MAX = 67;

interface IVector2 {
    x: number;
    y: number;
}

export const radToDeg = (angle: number) => (angle * 180) / Math.PI;
export const degToRad = (angle: number) => (angle * Math.PI) / 180;
export const getPositionFromAngledRadius = (
    angle: number,
    radius: number,
): IVector2 => ({
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
});
export const addVectors = (
    { x, y }: IVector2,
    addition: IVector2,
): IVector2 => ({
    x: x + addition.x,
    y: y + addition.y,
});
export const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n));

interface IPolyCircleGenerate {
    offset: IVector2;
    radius: number;
    segments?: number;
}

const getPolyCirclePoints = ({
    offset,
    radius,
    segments = 60,
}: IPolyCircleGenerate): IVector2[] => {
    const points = new Array<IVector2>(segments + 1);
    const inc = degToRad(360) / segments;
    for (let i = 0; i <= segments; i++) {
        points[i] = addVectors(
            getPositionFromAngledRadius(i * inc, radius),
            offset,
        );
    }
    return points;
};

interface ILogoProps {
    props: any;
}
const NavigationLogo = ({ props }: ILogoProps) => {
    const [hovered, setHovered] = useState(false);

    const rotationSpring = useSpring({
        strokeDasharray: '204px',
        strokeDashoffset: '0px',
        from: {
            strokeDasharray: '157px',
            strokeDashoffset: '157px',
        },
        config: { mass: 10, tension: 300, friction: 60 },
    });

    const pointsSquared = useMemo(
        () =>
            getPolyCirclePoints({ offset: { x: 42, y: 41 }, radius: 25 * 2 })
                .map(
                    ({ x, y }) => `${clamp(x, MIN, MAX)},${clamp(y, MIN, MAX)}`,
                )
                .join(' '),
        [],
    );
    const points = useMemo(
        () =>
            getPolyCirclePoints({ offset: { x: 42, y: 41 }, radius: 25 })
                .map(({ x, y }) => `${x},${y}`)
                .join(' '),
        [],
    );

    const spring = useSpring({
        points: hovered ? pointsSquared : points,
        fillOpacity: hovered ? 0.1 : 0,
    });

    useEffect(() => {}, []);

    return (
        <a.svg style={props} className="logo">
            <a.polygon
                {...spring}
                style={rotationSpring}
                shapeRendering="geometricPrecision"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => {
                    window.location.href = '/';
                }}
            />
            <a.text className="logo-text" x="42" y="50">
                OL
            </a.text>
        </a.svg>
    );
};

export default NavigationLogo;
