import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';

import theme from './theme';

const components = StyleSheet.create({
  cardLarge: {
    width: 190,
    height: 264,
    borderRadius: 6,
    backgroundColor: theme.colors.white,
  },
  headerTitle: {
    width: '100%',
    marginTop: '30%',
    alignItems: 'center',
  },
  formInput: {
    height: 54,
    width: '90%',
    borderColor: theme.colors.ternary,
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
  },
  cardFull: {
    width: '100%',
    height: 105,
    borderRadius: 6,
    backgroundColor: theme.colors.white,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  cardSmall: {
    width: 101,
    height: 135,
    borderRadius: 6,
    backgroundColor: theme.colors.white,
  },
  tabBarIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeHeader: {
    width: '100%',
    height: '18%',
    backgroundColor: theme.colors.primary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
  },
  specialtyIcon: {
    width: 80,
    height: 90,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  iconBar: {
    marginLeft: wp(1.33),
    padding: wp(2.66),
  },
  transparentHeader: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  drawerImage: {
    width: wp(32),
    height: wp(32),
  },

  imageStyle: {
    borderRadius: wp(16),
  },
  imageGradient: {
    flex: 1,
    borderRadius: wp(16),
  },
  drawerStyle: {
    backgroundColor: 'transparent',
    width: DeviceInfo.isTablet() ? 'auto' : '55%',
  },
  loginForm: {
    marginTop: '40%',
  },
  signupForm: {
    marginTop: '10%',
  },
  loginButton: {
    marginTop: '10%',
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 85,
    paddingVertical: 20,
    borderRadius: 12,
  },
  userForm: {
    width: '90%',
    marginTop: '5%',
  },
  doctorForm: {},
});

export default components;
