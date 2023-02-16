import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-GB">
                <title>Oli Legg</title>
                <Head>
                    <meta
                        name="title"
                        content="Oli Legg's Portfolio"
                        key="title"
                    />
                    <meta
                        name="description"
                        content="Contact info, work etc."
                        key="description"
                    />
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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
