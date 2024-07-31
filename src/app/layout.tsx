import { ReactNode } from 'react';
import '../styles/globals.scss';
import '../styles/home.scss';
import '../styles/_variables.scss';
import '../styles/navigation.scss';
import { Metadata } from 'next';
import NavigationComponent from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
	title: 'Oli Legg | Portfolio',
	description:
		"Oli Legg's software engineering portfolio showcasing projects, skills, and contact information.",
	keywords: [
		'Oli',
		'Legg',
		'Oliver',
		'Oliver Legg',
		'Oli Legg',
		'software engineering',
		'portfolio',
		'projects',
		'contact',
	],
} satisfies Metadata;

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en-GB">
			<head>
				<meta property="og:type" content="website" key="og:type" />
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
				<link
					rel="mask-icon"
					href="/favicon/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#fab043"></meta>
				<link rel="manifest" href="/favicon/site.webmanifest" />
			</head>
			<body>
				<NavigationComponent />
				{children}
				<Footer />
			</body>
		</html>
	);
}
