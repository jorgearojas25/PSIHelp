import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../styles';

const SpecialtyIcon = ({backgroundColor, iconName}) => {
  return (
    <View
      style={[
        {backgroundColor: backgroundColor},
        styles.components.specialtyIcon,
      ]}>
      <Icon
        name={iconName}
        size={30}
        color={styles.theme.colors.fontsContrast}></Icon>
    </View>
  );
};

export default SpecialtyIcon;
