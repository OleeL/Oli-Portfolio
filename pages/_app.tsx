import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.scss';
import '../styles/home.scss';
import '../styles/_variables.scss';
import '../styles/navigation.scss';
import {
    faCalendar,
    faLocationDot,
    faTag,
} from '@fortawesome/free-solid-svg-icons';
import { registerServiceWorker } from '../lib/global_hooks';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { library, config, dom } = require('@fortawesome/fontawesome-svg-core');

config.autoAddCss = false; // already being imported above
library.add(faLocationDot, faCalendar, faTag);

const MyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        registerServiceWorker();
        const html = document.getElementsByTagName('html');
        if (html.length > 0) {
            html[0].setAttribute('lang', 'en');
        }

        document.title = 'Oli Legg';
    }, []);

    return (
        <>
            <Component {...pageProps} />
            <style jsx global>
                {`
                    ${dom.css()}
                `}
            </style>
        </>
    );
};

export default MyApp;
