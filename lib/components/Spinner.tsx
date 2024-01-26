import { FC, SVGProps } from 'react';

type Settings = {
	radius: number;
	size: number; // w x h = size
};

type SvgProps = SVGProps<SVGSVGElement>;

type CircleProps = SVGProps<SVGCircleElement>;

export type SpinnerProps = {
	settings: Settings;
	svgProps?: Partial<SvgProps>;
	circleProps?: Partial<CircleProps>;
};

/*
    svg className: spinner
    circle className: path
*/
export const Spinner: FC<SpinnerProps> = ({
	settings,
	svgProps = {},
	circleProps = {},
}) => {
	return (
		<svg {...svgProps} className="spinner" viewBox={`0 0 ${50} ${50}`}>
			<circle
				{...circleProps}
				className="path"
				cx="50%"
				cy="50%"
				r={settings.radius}
				fill="none"
				strokeWidth="5"></circle>
		</svg>
	);
};
