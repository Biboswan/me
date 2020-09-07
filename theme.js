import { FONT_SCALE, BASE_SPACING, FONT_WEIGHT, FONT_FAMILY } from './constants';

const basicTheme = {
    fontscale: FONT_SCALE,
    base_spacing: BASE_SPACING,
    font_weight: FONT_WEIGHT,
    font_family: FONT_FAMILY,
};

const lightTheme = {};
const darkTheme = {};

const getTheme = isLightTheme => {
    return isLightTheme ? { ...basicTheme, ...lightTheme } : { ...basicTheme, ...darkTheme };
};

export default getTheme;
