import { ComponentType, FC, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { a, useSpring } from '@react-spring/web';
import { useFadeInIfVisible } from '../lib/global_hooks';
import { provideIds } from '../lib/helpers/array';

// Dynamically import the SVGs
const GitHubLogo = dynamic(
	() => import('../public/images/logos/logo-github.svg'),
);
const LinkedInLogo = dynamic(
	() => import('../public/images/logos/logo-linkedin.svg'),
);

interface IFooterLogo {
	component: ComponentType<{ alt?: string }>;
	alt: string;
	id: number;
	link: string;
}

const FooterImage = ({ component: Component, alt, link }: IFooterLogo) => {
	const [hover, setHover] = useState(false);
	const spring = useSpring({ scale: hover ? 1.2 : 1 });
	return (
		<a.div
			style={spring}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			<a href={link} aria-label={alt}>
				<Component alt={alt} />
			</a>
		</a.div>
	);
};

const Footer: FC = () => {
	const { fade, ref } = useFadeInIfVisible();
	const imageLogos: IFooterLogo[] = useMemo(
		() =>
			provideIds([
				{
					component: GitHubLogo,
					alt: 'github',
					link: 'https://github.com/OleeL/',
				},
				{
					component: LinkedInLogo,
					alt: 'linkedin',
					link: 'https://www.linkedin.com/in/leggoli/',
				},
			]),
		[],
	);
	return (
		<a.footer ref={ref} style={fade}>
			{imageLogos.map(({ id, component, alt, link }) => (
				<FooterImage
					key={id}
					component={component}
					alt={alt}
					id={id}
					link={link}
				/>
			))}
		</a.footer>
	);
};

export default Footer;
