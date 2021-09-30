import {StyleSheet} from 'react-native';
import theme from './theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
  simpleView: {
    flex: 1,
    overflow: 'hidden',
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: wp(16),
    marginVertical: wp(8),
  },
  paddingTop: {
    paddingTop: 0,
  },
  transparentView: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  formSelector: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
  },
});

export default layout;
