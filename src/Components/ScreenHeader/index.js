import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';

const ScreenHeader = ({onPress, nameScreen}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Pressable
        onPress={onPress}
        style={{
          backgroundColor: styles.theme.colors.white,
          width: 30,
          height: 30,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 15,
        }}>
        <Icon name="left" color={styles.theme.colors.fontsDetails} size={15} />
      </Pressable>
      <Text style={styles.theme.fonts.font18Bold}>{nameScreen}</Text>
    </View>
  );
};

export default ScreenHeader;
