import { DetailedHTMLProps, FC, HTMLAttributes, useId } from 'react';

type TitleProps = DetailedHTMLProps<
	HTMLAttributes<HTMLTitleElement>,
	HTMLTitleElement
>;

export const Title: FC<TitleProps> = props => {
	const reactId = useId();
	const defaultId = `${reactId}`;
	const { children, className = 'default', style, id = defaultId } = props;
	return (
		<title
			id={id}
			{...props}
			className={`title ${className}`}
			style={style}>
			{children}
		</title>
	);
};
