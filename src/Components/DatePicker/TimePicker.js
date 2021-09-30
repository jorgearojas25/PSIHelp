import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../../styles';

const TimePicker = ({Horas, onPress}) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {Horas.map((hora, i) => (
        <Pressable
          style={
            hora.Bloqueado ? styles.state.timeActive : styles.state.timeInActive
          }
          key={i}
          onPress={onPress}>
          <Text
            style={
              hora.Bloqueado
                ? styles.theme.fonts.font13PrimaryContrast
                : styles.theme.fonts.font13PrimaryContrast
            }>
            {hora.hora}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default TimePicker;
