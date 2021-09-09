import {StyleSheet} from 'react-native';
import theme from './theme';

const components = StyleSheet.create({
  cardLarge: {
    width: 190,
    height: 264,
    borderRadius: 6,
    backgroundColor: theme.colors.white,
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
});

export default components;
