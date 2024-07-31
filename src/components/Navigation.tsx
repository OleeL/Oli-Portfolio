'use client';

import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { useFadeIn, useFadeInArr } from '../lib/global_hooks';
import NavigationButton from './navigation/NavigationButton';
import { LogoProps } from './navigation/NavigationLogo';

const NavigationLogo = dynamic(() => import('./navigation/NavigationLogo'), {
	ssr: false,
}) as FC<LogoProps>;

interface INavigation {
	className?: string;
	style?: object;
	children?: ReactNode;
}

export const Navigation: FC<INavigation> = () => {
	const navigationButtons = ['About Me', 'Experience', 'Projects', 'Contact'];
	const fadeIn = useFadeInArr({
		length: navigationButtons.length,
		initialDelay: 0,
		delay: 200,
	});

	const logoFade = useFadeIn();
	return (
		<header>
			<nav className="navigation">
				<NavigationLogo svgStyle={logoFade} />
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
