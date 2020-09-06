import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'theme';
import useToggle from 'custom-hooks/useToggle';

const App = ({ Component, pageProps }) => {
    const [isLightTheme, toggleTheme] = useToggle(true);

    return (
        <ThemeProvider theme={getTheme(isLightTheme)}>
            {<Component toggleTheme={toggleTheme} {...pageProps} />}
        </ThemeProvider>
    );
};

App.propTypes = {
    Component: PropTypes.element.isRequired,
    pageProps: PropTypes.any.isRequired,
};

export default App;
