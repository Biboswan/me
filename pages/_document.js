import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GA_TRACKING_ID } from 'app-constants';
import MagicScriptTag from 'components/MagicScriptTag';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/Chalkboard-logo.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="crossorigin"
                    />
                    <link rel="icon" href="/icons/favicon.svg" sizes="any" type="image/svg+xml" />
                    <link
                        rel="apple-touch-icon"
                        href="/icons/favicon.svg"
                        sizes="any"
                        type="image/svg+xml"
                    />
                    <link
                        rel="preload"
                        href="/fonts/Grandstander-VF_wght.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="crossorigin"
                    />
                    <link rel="preconnect dns-prefetch" href="https://www.google-analytics.com" />
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
                    <noscript>This site runs best with JavaScript enabled.</noscript>
                    <MagicScriptTag />
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
