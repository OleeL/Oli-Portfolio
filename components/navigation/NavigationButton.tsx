import { FC, useState } from 'react';
import { a, useSpring } from 'react-spring';
import { useScrollSpring, goToSection } from '../../utilities/ScrollHandler';
import styles from '../../styles/variables.module.scss';
import { toKebabCase } from '../../lib/helpers/string';

interface IButton {
	buttonName: string;
	props?: any;
}

const NavigationButton: FC<IButton> = ({ buttonName, props }) => {
	const api = useScrollSpring();

	const [hovered, setHovered] = useState(false);
	const scale = hovered ? 1.05 : 1;

	const spring = useSpring({
		scale,
		border: 'none',
		borderRadius: '4px',
		color: hovered ? styles.primaryThemeColor : 'white',
	});

	return (
		<li>
			<a.button
				style={{ ...spring, ...props }}
				className="nav-button"
				type="button"
				onClick={() =>
					goToSection({ api, id: toKebabCase(buttonName) })
				}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}>
				{buttonName}
			</a.button>
		</li>
	);
};

export default NavigationButton;
