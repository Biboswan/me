import { lightTheme, darkTheme } from 'theme';
import { THEME_MODE_KEY, INITIAL_THEME_MODE_CSS_PROP } from 'app-constants';

const setColorsByTheme = () => {
    const themes = '🌈';
    const themeModeKey = '🔑';
    const themeModeCssProp = '⚡️';

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    const persistedPreference = localStorage.getItem(themeModeKey);

    let themeMode = 'light';

    const hasUsedToggle = typeof persistedPreference === 'string';

    if (hasUsedToggle) {
        themeMode = persistedPreference;
    } else {
        themeMode = prefersDarkFromMQ ? 'dark' : 'light';
    }

    let root = document.documentElement;

    root.style.setProperty(themeModeCssProp, themeMode);
    for (const [key, value] of Object.entries(themes[themeMode])) {
        const cssVarName = `--color-${key}`;
        root.style.setProperty(cssVarName, value);
    }
};

const MagicScriptTag = () => {
    const boundFn = String(setColorsByTheme)
        .replace("'🌈'", JSON.stringify({ light: lightTheme, dark: darkTheme }))
        .replace('🔑', THEME_MODE_KEY)
        .replace('⚡️', INITIAL_THEME_MODE_CSS_PROP);

    let calledFunction = `(${boundFn})()`;

    return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export default MagicScriptTag;
