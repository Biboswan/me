import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from 'app-constants';

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
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                    `,
                        }}
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
