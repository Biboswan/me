import { FONT_SCALE, BASE_SPACING, FONT_WEIGHT, FONT_FAMILY } from './constants';

const basicTheme = {
    FONT_SCALE,
    BASE_SPACING,
    FONT_WEIGHT,
    FONT_FAMILY,
};

const lightTheme = {};
const darkTheme = {};

const getTheme = isLightTheme => {
    return isLightTheme ? { ...basicTheme, ...lightTheme } : { ...basicTheme, ...darkTheme };
};

export default getTheme;
