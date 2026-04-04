import {
    FONT_SCALE,
    BASE_SPACING,
    FONT_WEIGHT,
    FONT_FAMILY,
    COLOR,
    BREAKPOINTS,
    SPACING,
} from 'app-constants';

const basicTheme = {
    fontscale: FONT_SCALE,
    base_spacing: BASE_SPACING,
    font_weight: FONT_WEIGHT,
    font_family: FONT_FAMILY,
    breakpoint: BREAKPOINTS,
    spacing: SPACING,
};

export const lightTheme = {
    brand: COLOR.blue[500],
    secondary: COLOR.orange[500],
    accent: COLOR.magenta[500],
    bgColor: COLOR.white,
    primaryText: COLOR.black,
    secondaryText: COLOR.textgrey[100],
    headerBg: COLOR.white,
    footerBg: `linear-gradient(
        135deg,
        ${COLOR.blue[600]} 0%,
        ${COLOR.magenta[500]} 50%,
        ${COLOR.orange[400]} 100%
    )`,
    footerText: COLOR.white,
    strong: COLOR.blue[600],
    webballBg: COLOR.orange[50],
    blueExtreme: COLOR.blue[900],
    blogArticleCardBg: COLOR.white,
    projectSectionBg: `linear-gradient(135deg, ${COLOR.blue[500]} 0%, ${COLOR.magenta[500]} 50%, ${COLOR.orange[400]} 100%)`,
    projectCardBg: COLOR.blue[50],
    projectSectionTitle: COLOR.white,
    codeBg: COLOR.blue[50],
    themeSwitchBg: COLOR.blue[500] + '33',
    imageFilter: 'none',
    scrollbarThumb: COLOR.blue[300],
    scrollbarTrack: COLOR.blue[50],
    // New gradient utilities
    gradientPrimary: `linear-gradient(135deg, ${COLOR.blue[500]} 0%, ${COLOR.magenta[500]} 100%)`,
    gradientSecondary: `linear-gradient(135deg, ${COLOR.orange[500]} 0%, ${COLOR.magenta[400]} 100%)`,
    gradientText: `linear-gradient(135deg, ${COLOR.blue[500]} 0%, ${COLOR.magenta[500]} 50%, ${COLOR.orange[400]} 100%)`,
};

export const darkTheme = {
    brand: COLOR.blue[300],
    secondary: COLOR.orange[400],
    accent: COLOR.magenta[400],
    bgColor: COLOR.darksurfaces[0],
    primaryText: COLOR.textgrey[300],
    secondaryText: COLOR.textgrey[200],
    headerBg: COLOR.darksurfaces[1],
    footerBg: `linear-gradient(
        135deg,
        ${COLOR.darksurfaces[2]} 0%,
        ${COLOR.blue[900]}40 50%,
        ${COLOR.magenta[900]}30 100%
    )`,
    footerText: COLOR.textgrey[300],
    strong: COLOR.blue[300],
    webballBg: COLOR.orange[700],
    blueExtreme: COLOR.blue[100],
    blogArticleCardBg: COLOR.darksurfaces[2],
    projectSectionBg: `linear-gradient(135deg, ${COLOR.darksurfaces[3]} 0%, ${COLOR.blue[900]}50 100%)`,
    projectCardBg: COLOR.darksurfaces[4],
    projectSectionTitle: COLOR.textgrey[300],
    codeBg: COLOR.darksurfaces[4],
    imageFilter: 'grayscale(20%)',
    themeSwitchBg: COLOR.darksurfaces[3],
    scrollbarThumb: COLOR.blue[700],
    scrollbarTrack: COLOR.darksurfaces[4],
    // New gradient utilities for dark mode
    gradientPrimary: `linear-gradient(135deg, ${COLOR.blue[400]} 0%, ${COLOR.magenta[400]} 100%)`,
    gradientSecondary: `linear-gradient(135deg, ${COLOR.orange[400]} 0%, ${COLOR.magenta[300]} 100%)`,
    gradientText: `linear-gradient(135deg, ${COLOR.blue[300]} 0%, ${COLOR.magenta[400]} 50%, ${COLOR.orange[300]} 100%)`,
};

const getTheme = themeMode => {
    return themeMode === null || themeMode === 'light'
        ? { ...basicTheme, themeMode, color: { ...COLOR, ...lightTheme } }
        : { ...basicTheme, themeMode, color: { ...COLOR, ...darkTheme } };
};

export default getTheme;
