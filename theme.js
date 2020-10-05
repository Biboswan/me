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

const lightTheme = {
    brand: COLOR.blue[500],
    secondary: COLOR.orange[900],
};

const darkTheme = {};

const getTheme = isLightTheme => {
    return isLightTheme
        ? { ...basicTheme, color: { ...COLOR, ...lightTheme } }
        : { ...basicTheme, ...darkTheme };
};

export default getTheme;
