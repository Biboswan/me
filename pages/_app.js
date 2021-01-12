import 'normalize.css';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as gtag from 'utils/gtag';
import getTheme from 'theme';
import { THEME_MODE_KEY, INITIAL_THEME_MODE_CSS_PROP } from 'app-constants';
import Top from 'components/Top';
import Footer from 'components/Footer';
import { lightTheme, darkTheme } from 'theme';
import usePrefersReducedMotion from 'custom-hooks/usePrefersReducedMotion';

const GlobalStyle = createGlobalStyle`
	:root {
		font-size: 16px;
	}

	//latin
	//Chalkboard.ttf

	@font-face {
		font-display: swap;
		font-family: 'Chalkboard';
		src: url('/fonts/Chalkboard-logo.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-display: swap;
		font-family: 'Grandstander';
		src: url('/fonts/Grandstander-VF_wght.woff2') format('woff2 supports variations'),
			url('/fonts/Grandstander-VF_wght.woff2') format('woff2-variations');
		font-weight: 100 900;
		font-style: normal;
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
	}

	@font-face {
		font-display: swap;
		font-family: 'Grandstander';
		src: url('/fonts/Grandstander-Italic-VF_wght.woff2') format('woff2 supports variations'),
			url('/fonts/Grandstander-Italic-VF_wght.woff2') format('woff2-variations');
		font-weight: 100 900;
		font-style: italic;
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
	}	

	@font-face {
		font-display: swap;
		font-family: 'Mulish';
		src: url('/fonts/Mulish-VF_wght.woff2') format('woff2 supports variations'),
			url('/fonts/Mulish-VF_wght.woff2') format('woff2-variations');
		font-weight: 200 900;
		font-style: normal;
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
	}

	@font-face {
		font-display: swap;
		font-family: 'Mulish';
		src: url('/fonts/Mulish-Italic-VF_wght.woff2') format('woff2 supports variations'),
			url('/fonts/Mulish-Italic-VF_wght.woff2') format('woff2-variations');
		font-weight: 200 900;
		font-style: italic;
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
	}

	body {
		font-family: ${props => props.theme.font_family.two};
		background-color: var(--color-bgColor);
		color: var(--color-primaryText);
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	span,
	section,
	article,
	ul,
	li,
	figure,
	blockquote {
		margin: 0;
		padding: 0;
	}

	img,
	video {
		max-width: 100%;
	}

	img:not([src*=".svg"]) {
 		filter: var(--color-imageFilter);
	}

	* {
		scrollbar-width: thin;
		scrollbar-color: var(--color-scrollbarThumb) var(--color-scrollbarTrack);
	}

	*::-webkit-scrollbar {
  		width: 12px;
	}

	*::-webkit-scrollbar-track {
		background: var(--color-scrollbarTrack);
	}

	*::-webkit-scrollbar-thumb {
		background-color: var(--color-scrollbarThumb);
		border-radius: 20px;
		border: 2px solid var(--color-scrollbarTrack);
	}

	@media screen and (prefers-reduced-motion: reduce), (update: slow) {
		* {
			animation-duration: 0.001ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.001ms !important;
		}
	}
`;

const AppContainer = styled.div`
    width: 100%;
`;

const App = ({ Component, pageProps }) => {
    const [themeMode, setThemeMode] = useState(null);
    const router = useRouter();
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const intialTheme = getComputedStyle(document.documentElement).getPropertyValue(
            INITIAL_THEME_MODE_CSS_PROP
        );
        localStorage.setItem(THEME_MODE_KEY, intialTheme);
        setThemeMode(intialTheme);
    }, []);

    useEffect(() => {
        const handleRouteChange = url => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    const setColorMode = useCallback(() => {
        const root = window.document.documentElement;
        const newValue = themeMode === 'light' ? 'dark' : 'light';
        const selectedTheme = newValue === 'light' ? lightTheme : darkTheme;

        for (const [key, value] of Object.entries(selectedTheme)) {
            const cssVarName = `--color-${key}`;
            root.style.setProperty(cssVarName, value);
        }

        localStorage.setItem(THEME_MODE_KEY, newValue);
        setThemeMode(newValue);
    }, [themeMode, setThemeMode]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta property="og:site_name" content="Biboswan Roy" />
                <meta property="fb:app_id" content="400871734626165" />
                {themeMode && (
                    <meta
                        name="theme-color"
                        content={themeMode === 'light' ? lightTheme.brand : darkTheme.bgColor}
                    />
                )}
            </Head>
            <ThemeProvider theme={{ prefersReducedMotion, setColorMode, ...getTheme(themeMode) }}>
                <>
                    <GlobalStyle />
                    <AppContainer>
                        <Top />
                        <Component {...pageProps} />
                        <Footer />
                    </AppContainer>
                </>
            </ThemeProvider>
        </>
    );
};

App.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    pageProps: PropTypes.any.isRequired,
};

export default App;
