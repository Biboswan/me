import 'normalize.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'theme';
import useToggle from 'custom-hooks/useToggle';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  h1,h2,h3,h4,h5,p,span,section,article,ul,li {
    margin:0;
    padding:0;
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
