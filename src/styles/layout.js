import {StyleSheet} from 'react-native';
import theme from './theme';

const layout = StyleSheet.create({
  fullCenterContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screensSpacing: {
    padding: 20,
  },
  itemsSpacing: {
    width: 15,
  },
});

export default layout;
