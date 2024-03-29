import { AppProps } from 'next/app';
import { FunctionComponent, useEffect } from 'react';
import '../styles/globals.scss';
import '../styles/home.scss';
import '../styles/_variables.scss';
import '../styles/navigation.scss';
import {
	faCalendar,
	faLocationDot,
	faTag,
	faLaptop,
	faBuilding,
	faHome,
} from '@fortawesome/free-solid-svg-icons';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { registerServiceWorker } from '../lib/global_hooks';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { library, config, dom } = require('@fortawesome/fontawesome-svg-core');

config.autoAddCss = false; // already being imported above
library.add(faLocationDot, faCalendar, faTag, faLaptop, faBuilding, faHome);

const MyApp = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		registerServiceWorker();
		const html = document.getElementsByTagName('html');
		if (html.length > 0) {
			html[0].setAttribute('lang', 'en');
		}
	}, []);

	const PageComponent = Component as FunctionComponent;

	return (
		<>
			<PageComponent {...pageProps} />
			<Analytics />
			<GoogleAnalytics trackPageViews />
			<style jsx global>
				{`
					${dom.css()}
				`}
			</style>
		</>
	);
};

export default MyApp;
