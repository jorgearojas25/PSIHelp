import {StyleSheet} from 'react-native';
import theme from './theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const state = StyleSheet.create({
  activeContainer: {
    borderLeftWidth: wp(1.06),
    borderLeftColor: '#00b8d4',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: wp(0.8),
    marginTop: 0,
  },

  activeText: {
    fontWeight: 'bold',
    color: '#00b8d4',
    backgroundColor: 'transparent',
  },

  inActiveContainer: {
    borderLeftWidth: wp(1.06),
    borderLeftColor: 'transparent',
    backgroundColor: 'transparent',
    borderRadius: wp(0.8),
    marginTop: 0,
  },

  inactiveText: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
  },
  formButton: {
    height: 54,
    backgroundColor: theme.colors.backgrounds,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  formButtonActive: {
    height: 54,
    backgroundColor: theme.colors.primary,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  dayActive: {
    width: 150,
    height: 64,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.primary,
    marginRight: 15,
    borderRadius: 12,
  },
  dayInActive: {
    width: 150,
    height: 64,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: theme.colors.fontsContrast,
    marginRight: 15,
    borderRadius: 12,
  },
  timeActive: {
    width: '22%',
    marginLeft: '2%',
    marginTop: '2%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    borderRadius: 8,
  },
  timeInActive: {
    width: '22%',
    marginLeft: '2%',
    marginTop: '2%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.fontsContrast,
    borderRadius: 8,
  },
});

export default state;
