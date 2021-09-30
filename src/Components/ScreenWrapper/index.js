import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from '../../styles';

const Stack = createStackNavigator();

export const ScreenWrapper = ({children, showHeader, name, navigation}) => {
  const headerOptions = React.useMemo(
    () =>
      showHeader
        ? {
            headerTransparent: true,
            headerBackground: () => (
              <View style={styles.components.transparentHeader} />
            ),
            headerTintColor: 'white',
            headerLeft: () => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.components.iconBar}
                  onPress={() => navigation.toggleDrawer()}>
                  <Icon name="bars" size={20} color="white" />
                </TouchableOpacity>
              );
            },
          }
        : {headerShown: false},
    [showHeader, navigation, name],
  );

  return (
    <Animated.View style={styles.layout.simpleView}>
      <Stack.Navigator>
        <Stack.Screen name={name} options={headerOptions}>
          {children}
        </Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

export default ScreenWrapper;
