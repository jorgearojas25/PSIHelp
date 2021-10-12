import React from 'react';
import {View, Text, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {searchDocAgenda} from '../../store/reducers/searchReducer';
import {saveSchedule, searchUserAgenda} from '../../store/reducers/userReducer';
import styles from '../../styles';
import scheduleUtils from '../../utils/scheduleUtils';
import DayPicker from './DayPicker';
import TimePicker from './TimePicker';

const DatePicker = ({doctor}) => {
  const dispatch = useDispatch();
  const [dia, setDia] = React.useState('');
  const [horas, setHoras] = React.useState([]);
  const [update, setUpdate] = React.useState(false);

  const {user, docAgenda, userAgenda} = useSelector(state => ({
    user: state.userReducer.user,
    docAgenda: state?.searchReducer?.docAgenda,
    userAgenda: state?.userReducer?.userAgenda,
  }));

  const aviableDates = React.useMemo(() => {
    const dates = scheduleUtils.getWeekDays(userAgenda, docAgenda);

    setHoras(dates.find(date => date.Fecha === dia).Horas);
    return dates;
  }, [userAgenda, docAgenda, update]);

  React.useEffect(() => {
    dispatch(searchDocAgenda({Id_doctor: doctor._id}));
    dispatch(searchUserAgenda({Id_usuario: user?._id}));
  }, [user, doctor, update]);

  const handleSchedule = hora => {
    dispatch(
      saveSchedule({
        idUser: user._id,
        idDoc: doctor._id,
        fecha: dia,
        hora: hora,
      }),
    );
    setUpdate(!update);
  };

  const onSelectTime = hora => {
    Alert.alert('Confirmacion', 'Deseas reservar este espacio', [
      {
        text: 'Cancel',
        onPress: () => console.log(dia, hora),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => handleSchedule(hora)},
    ]);
  };

  const keyExtractor = item => {
    item.id;
  };

  const renderItem = item => (
    <DayPicker
      Fecha={item.item.Fecha}
      isActive={item.item.Fecha === dia}
      Horas={item.item.Horas}
      onPress={() => {
        setDia(item.item.Fecha);
        setHoras(item.item.Horas);
      }}
    />
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
