import React, {useLayoutEffect} from 'react';
import {View, Text, BackHandler, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardFull from '../../../../Components/Card/CardFull';
import DatePicker from '../../../../Components/DatePicker';
import ScreenHeader from '../../../../Components/ScreenHeader';
import config from '../../../../config';
import styles from '../../../../styles';
import scheduleUtils from '../../../../utils/scheduleUtils';

const Schedule = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [doctor, setDoctor] = React.useState(route.params);
  const {user} = useSelector(state => ({user: state.userReducer.user}));
  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  React.useLayoutEffect(() => {
    setDoctor(route.params);
  });

  const calculateSchedules = React.useMemo(() => {}, []);

  return (
    <View
      style={[
        styles.layout.screensSpacing,
        {flex: 1, backgroundColor: styles.theme.colors.backgrounds},
      ]}>
      <ScreenHeader
        onPress={() => navigation.goBack()}
        nameScreen={'Seleccionar Cita'}
      />
      <View style={{marginTop: '5%'}}>
        <CardFull
          id={doctor._id}
          isFav={false}
          key={doctor._id}
          name={doctor.Nombre}
          photo={doctor.Foto}
          specialty={doctor.Especialidades[0].Nombre}
          stars={doctor.Calificaion}
          price={doctor.Costo}
          dates={doctor.Numero_citas}
        />
      </View>
      <View>
        <DatePicker />
      </View>
    </View>
  );
};

export default Schedule;
