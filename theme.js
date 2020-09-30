import { FONT_SCALE, BASE_SPACING, FONT_WEIGHT, FONT_FAMILY, COLOR } from './constants';

const basicTheme = {
    fontscale: FONT_SCALE,
    base_spacing: BASE_SPACING,
    font_weight: FONT_WEIGHT,
    font_family: FONT_FAMILY,
    color: COLOR,
};

const lightTheme = {
    brandColor: COLOR.blue,
    secondaryColor: COLOR.orange,
};

const darkTheme = {};

const getTheme = isLightTheme => {
    return isLightTheme ? { ...basicTheme, ...lightTheme } : { ...basicTheme, ...darkTheme };
};

export default getTheme;
