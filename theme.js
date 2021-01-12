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
    secondary: COLOR.orange[100],
    bgColor: COLOR.white,
    primaryText: COLOR.black,
    secondaryText: COLOR.black,
    headerBg: COLOR.white,
    footerBg: `linear-gradient(
        233.58deg,
        rgba(67, 70, 241, 0.9) 47.99%,
        rgba(0, 154, 116, 0) 105.57%
    )`,
    footerText: COLOR.white,
    strong: COLOR.blue[600],
    webballBg: COLOR.orange[50],
    blueExtreme: COLOR.blue[900],
    blogArticleCardBg: COLOR.white,
    projectSectionBg:
        'linear-gradient(180deg, rgba(67, 70, 241, 0.81) 0%, rgba(255, 143, 68, 0.9) 100%)',
    projectCardBg: COLOR.blue[100],
    projectSectionTitle: COLOR.white,
    codeBg: COLOR.blue[50],
    themeSwitchBg: COLOR.blue[500] + '33',
    imageFilter: 'none',
    scrollbarThumb: COLOR.blue[200],
    scrollbarTrack: COLOR.textgrey[300],
};

export const darkTheme = {
    brand: COLOR.blue[100],
    secondary: COLOR.orange[900],
    bgColor: COLOR.darksurfaces[0],
    primaryText: COLOR.textgrey[300],
    secondaryText: COLOR.textgrey[200],
    headerBg: COLOR.darksurfaces[2],
    footerBg: `linear-gradient(180deg, #171726 0%, #0F0F19 100%)`,
    footerText: COLOR.textgrey[300],
    strong: COLOR.blue[200],
    webballBg: COLOR.orange[800],
    blueExtreme: COLOR.blue[50],
    blogArticleCardBg: COLOR.darksurfaces[2],
    projectSectionBg: COLOR.darksurfaces[2],
    projectCardBg: COLOR.darksurfaces[5],
    projectSectionTitle: COLOR.textgrey[300],
    codeBg: COLOR.darksurfaces[5],
    imageFilter: 'grayscale(35%)',
    themeSwitchBg: COLOR.darksurfaces[2],
    scrollbarThumb: COLOR.orange[800],
    scrollbarTrack: COLOR.darksurfaces[6],
};

const getTheme = themeMode => {
    return themeMode === null || themeMode === 'light'
        ? { ...basicTheme, themeMode, color: { ...COLOR, ...lightTheme } }
        : { ...basicTheme, themeMode, color: { ...COLOR, ...darkTheme } };
};

export default getTheme;
