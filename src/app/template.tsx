'use client';

import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import ServiceWorker from '../components/ServiceWorker';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Template = ({ children }: { children: ReactNode }) => {
	return (
		<>
			{children}
			<ServiceWorker />
			<Analytics />
			<GoogleAnalytics trackPageViews />
		</>
	);
};

export default Template;
