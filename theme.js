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
};

const getTheme = isLightTheme => {
    return isLightTheme
        ? { ...basicTheme, color: { ...COLOR, ...lightTheme } }
        : { ...basicTheme, ...darkTheme };
};

export default getTheme;
