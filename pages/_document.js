import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/icons/favicon.svg" sizes="any" type="image/svg+xml" />
                    <link
                        rel="apple-touch-icon"
                        href="/icons/favicon.svg"
                        sizes="any"
                        type="image/svg+xml"
                    />
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
