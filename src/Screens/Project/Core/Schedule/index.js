import React from 'react';
import {View, BackHandler} from 'react-native';
import CardFull from '../../../../Components/Card/CardFull';
import DatePicker from '../../../../Components/DatePicker';
import ScreenHeader from '../../../../Components/ScreenHeader';
import styles from '../../../../styles';

const Schedule = ({navigation, route}) => {
  const [doctor, setDoctor] = React.useState(route.params);

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
  }, [route]);

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
        <DatePicker doctor={doctor} />
      </View>
    </View>
  );
};

export default Schedule;
