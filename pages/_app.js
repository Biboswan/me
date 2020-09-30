import 'normalize.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'theme';
import useToggle from 'custom-hooks/useToggle';
//font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
const GlobalStyle = createGlobalStyle`
	:root {
		font-size: 16px;
	}

	//latin

	@font-face {
		font-display: swap;
		font-family: 'Grandstander';
		src: url('./fonts/Grandstander-VF_wght.woff2') format('woff2 supports variations'),
			url('./fonts/Grandstander-VF_wght.woff2') format('woff2-variations');
		font-weight: 100 900;
		font-style: normal;
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
	}

	@font-face {
		font-display: swap;
		font-family: 'Grandstander';
		src: url('./fonts/Grandstander-Italic-VF_wght.woff2') format('woff2 supports variations'),
			url('./fonts/Grandstander-Italic-VF_wght.woff2') format('woff2-variations');
		font-weight: 100 900;
		font-style: italic;
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
	}	

	@font-face {
		font-display: swap;
		font-family: 'Mulish';
		src: url('./fonts/Mulish-VF_wght.woff2') format('woff2 supports variations'),
			url('./fonts/Mulish-VF_wght.woff2') format('woff2-variations');
		font-weight: 200 900;
		font-style: normal;
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
	}

	@font-face {
		font-display: swap;
		font-family: 'Mulish';
		src: url('./fonts/Mulish-Italic-VF_wght.woff2') format('woff2 supports variations'),
			url('./fonts/Mulish-Italic-VF_wght.woff2') format('woff2-variations');
		font-weight: 200 900;
		font-style: italic;
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
		U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
		U+FEFF, U+FFFD;
	}

	body {
		font-family: ${props => props.theme.font_family.two};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	p,
	span,
	section,
	article,
	ul,
	li {
		margin: 0;
		padding: 0;
	}
`;

const App = ({ Component, pageProps }) => {
    const [isLightTheme, toggleTheme] = useToggle(true);

    return (
        <ThemeProvider theme={getTheme(isLightTheme)}>
            <>
                <GlobalStyle />
                <Component toggleTheme={toggleTheme} {...pageProps} />
            </>
        </ThemeProvider>
    );
};

App.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
    pageProps: PropTypes.any.isRequired,
};

export default App;
