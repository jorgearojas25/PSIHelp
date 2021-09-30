import React from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styles from '../../styles';
import scheduleUtils from '../../utils/scheduleUtils';
import DayPicker from './DayPicker';
import TimePicker from './TimePicker';

const DatePicker = () => {
  const [dia, setDia] = React.useState('');
  const [horas, setHoras] = React.useState([]);
  const aviableDates = React.useMemo(() => {
    return scheduleUtils.getWeekDays();
  }, []);

  const onSelectTime = () =>
    Alert.alert('Confirmacion', 'Deseas reservar este espacio', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const keyExtractor = React.useCallback(item => {
    item.id;
  }, []);

  const renderItem = React.useCallback(
    item => (
      <DayPicker
        Fecha={item.item.Fecha}
        isActive={item.item.Fecha === dia}
        Horas={item.item.Horas}
        onPress={() => {
          setDia(item.item.Fecha);
          setHoras(item.item.Horas);
        }}
      />
    ),
    [dia],
  );

  return (
    <View style={{marginTop: '5%'}}>
      <FlatList
        data={aviableDates}
        horizontal
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
      <View style={{marginTop: '7%'}}>
        <Text
          style={[
            styles.theme.fonts.font18Bold,
            {alignSelf: 'center', marginBottom: '7%'},
          ]}>
          {dia}
        </Text>
        <Text style={styles.theme.fonts.font16Heavy}>Espacios disponibles</Text>
        <TimePicker Horas={horas} onPress={onSelectTime} />
      </View>
    </View>
  );
};

export default DatePicker;
