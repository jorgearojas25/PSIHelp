import {StyleSheet} from 'react-native';
const palette = {
  primary: '#8FBC94',
  primaryOpacity: '#8FBC9480',
  secondary: '#72A18E',
  ternary: '#548687',
  contrast: '#556386',
  fontsDetails: '#000505',
  backgrounds: '#E5E5E5',
  stars: '#F6D060',
  favs: '#FF0000',
  white: '#FFFFFF',
  fontsContrast: '#FAFAFA',
  fontPrimary: '#0EBE7F',
};

const fonts = StyleSheet.create({
  font24Title: {
    fontSize: 24,
    fontWeight: '500',
  },
  font18Bold: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
  },
  font18Contrast: {
    fontWeight: '500',
    fontSize: 18,
    color: palette.white,
  },
  font12: {
    fontSize: 12,
    lineHeight: 15,
    color: palette.contrast,
  },
  font14Contrast: {
    fontSize: 14,
    lineHeight: 15,
    color: palette.contrast,
  },
  font12title: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 'bold',
  },
  font20White: {
    fontSize: 20,
    lineHeight: 24,
    color: palette.fontsContrast,
  },
  font14White: {
    fontSize: 14,
    lineHeight: 24,
    color: palette.fontsContrast,
  },
  font14Off: {
    fontSize: 14,
    lineHeight: 24,
    color: palette.contrast,
  },
  font14Primary: {
    fontSize: 14,
    color: palette.fontPrimary,
    fontWeight: '600',
  },
  font14: {
    fontSize: 14,
    color: palette.contrast,
  },
  font24WhiteBold: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    color: palette.fontsContrast,
    width: '90%',
  },
  font16Light: {
    fontWeight: '300',
    fontSize: 16,
  },
  font16LightContrast: {
    fontWeight: '300',
    fontSize: 16,
    color: palette.fontsContrast,
  },
  font16Heavy: {
    fontWeight: 'bold',
    fontSize: 16,
    color: palette.fontsDetails,
  },
  font16HeavyContrast: {
    fontWeight: 'bold',
    fontSize: 16,
    color: palette.fontsContrast,
  },
  font10Light: {
    fontWeight: '300',
    fontSize: 10,
    color: palette.fontsDetails,
  },
  font10LightContrast: {
    fontWeight: '300',
    fontSize: 10,
    color: palette.fontsContrast,
  },
  font13Primary: {
    fontSize: 13,
    color: palette.primary,
    fontWeight: '800',
  },
  font13PrimaryContrast: {
    fontSize: 13,
    color: palette.primary,
    fontWeight: '800',
  },
});

const theme = {
  colors: {...palette},
  fonts,
};

export default theme;
