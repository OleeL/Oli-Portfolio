import { FC, ReactNode } from 'react';

const Footnote: FC<{ children: ReactNode }> = ({ children }) => {
	return <p className="footnote">{children}</p>;
};

export default Footnote;
