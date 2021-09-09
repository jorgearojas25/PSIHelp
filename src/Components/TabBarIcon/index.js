import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../styles/theme';

const TabBarIcon = ({color, isFocused, name, size}) => {
  return (
    <View
      style={{
        backgroundColor: isFocused ? theme.colors.primary : 'transparent',
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon
        color={isFocused ? theme.colors.backgrounds : color}
        name={name}
        size={size}
      />
    </View>
  );
};

export default TabBarIcon;
