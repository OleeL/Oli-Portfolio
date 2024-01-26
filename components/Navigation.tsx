import { FC, ReactNode } from 'react';
import { useFadeIn, useFadeInArr } from '../lib/global_hooks';
import NavigationButton from './navigation/NavigationButton';
import NavigationLogo from './navigation/NavigationLogo';

interface INavigation {
	className?: string;
	style?: object;
	children?: ReactNode;
}

export const Navigation: FC<INavigation> = () => {
	const navigationButtons = ['About Me', 'Experience', 'Projects', 'Contact'];
	const [fadeIn] = useFadeInArr({
		length: navigationButtons.length,
		initialDelay: 100,
		delay: 200,
	});
	const logoFade = useFadeIn();
	return (
		<header>
			<nav className="navigation">
				<NavigationLogo props={logoFade} />
				<ul className="nav-buttons">
					{navigationButtons.map((x, i) => {
						return (
							<NavigationButton
								key={i}
								props={fadeIn[i]}
								buttonName={x}
							/>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
