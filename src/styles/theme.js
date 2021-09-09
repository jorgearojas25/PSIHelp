import {StyleSheet} from 'react-native';
const palette = {
  primary: '#8FBC94',
  secondary: '#72A18E',
  ternary: '#548687',
  contrast: '#556386',
  fontsDetails: '#000505',
  backgrounds: '#E5E5E5',
  stars: '#F6D060',
  favs: '#FF0000',
  white: '#FFFFFF',
  fontsContrast: '#FAFAFA',
};

const fonts = StyleSheet.create({
  font18Bold: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
  },
  font12: {
    fontSize: 12,
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
  font24WhiteBold: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    color: palette.fontsContrast,
    width: '90%',
  },
});

const theme = {
  colors: {...palette},
  fonts,
};

export default theme;
