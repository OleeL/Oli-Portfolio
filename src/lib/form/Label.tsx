import { FC } from 'react';

type LabelProps = React.DetailedHTMLProps<
	React.LabelHTMLAttributes<HTMLLabelElement>,
	HTMLLabelElement
>;

export const Label: FC<LabelProps> = props => {
	const { children, className = 'default', style } = props;
	return (
		<label {...props} className={`label-${className}`} style={style}>
			{children}
		</label>
	);
};
