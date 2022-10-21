import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.scss';
import '../styles/home.scss';
import '../styles/_variables.scss';
import '../styles/navigation.scss';
import { faCalendar, faCoffee } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { library, config, dom } = require('@fortawesome/fontawesome-svg-core');

config.autoAddCss = false; // already being imported above
library.add(faCoffee, faCalendar);

const MyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        const html = document.getElementsByTagName('html');
        if (html.length > 0) {
            html[0].setAttribute('lang', 'en');
        }

        document.title = 'Oliver Legg';
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
