'use client';

import { useEffect } from 'react';

const registerServiceWorker = () => {
	navigator.serviceWorker.register('/service-worker.js', {
		scope: '.',
	});
};

export const useServiceWorker = () => {
	useEffect(() => {
		if ('serviceWorker' in navigator && typeof window !== 'undefined') {
			window.addEventListener('load', () => {
				registerServiceWorker();
			});
		}
	}, []);
};

export default useServiceWorker;
