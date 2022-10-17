import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/globals.scss';
import '../styles/home.scss';
import '../styles/_variables.scss';
import '../styles/navigation.scss';

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
        </>
    );
};

export default MyApp;
