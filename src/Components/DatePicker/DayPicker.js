import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../../styles';

const DayPicker = ({Fecha, isActive, Horas, onPress}) => {
  const aviableDays = React.useMemo(
    // () => Horas.filter(hora => !hora.Bloqueado),
    () => true,
    [],
  );

  return (
    <Pressable
      style={isActive ? styles.state.dayActive : styles.state.dayInActive}
      onPress={onPress}>
      <Text
        style={
          isActive
            ? styles.theme.fonts.font16HeavyContrast
            : styles.theme.fonts.font16Heavy
        }>
        {Fecha}
      </Text>
      <Text
        style={
          isActive
            ? styles.theme.fonts.font10LightContrast
            : styles.theme.fonts.font10Light
        }>
        {Horas.length > 0
          ? `${Horas.length} espacios disponibles`
          : 'No hay espacios disponibles'}
      </Text>
    </Pressable>
  );
};

export default DayPicker;
