import React from 'react';
import {BackHandler, Alert} from 'react-native';
//components
import {createDrawerNavigator} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import {stackScreens} from './screens';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {cleanUser} from '../../store/reducers/userReducer';
import {cleanSearch} from '../../store/reducers/searchReducer';

const MainApp = ({navigation}) => {
  const Drawer = createDrawerNavigator();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const backAction = () => {
      Alert.alert('Espera!', 'Seguro que deseas cerrar sesion?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            dispatch(cleanUser());
            dispatch(cleanSearch());
            navigation.navigate('Login');
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      {stackScreens.map(screen => {
        return (
          <Drawer.Screen
            key={screen.id}
            name={screen.name}
            component={screen.children}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default MainApp;
