import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const AgendaRegister = props => {
  const {
    item,
    isAgenda,
    Fecha,
    Hora,
    Id_usuario,
    Id_doctor,
    Finalizada,
    Comentarios,
  } = props;
  const navigation = useNavigation();
  if (isAgenda && Finalizada) {
    return null;
  }

  const seeComments = React.useCallback(() => {
    navigation.navigate('Comments', item);
  }, [navigation]);
  return (
    <View style={[styles.components.cardFull]}>
      <View style={{width: '30%', padding: 2, height: '100%'}}>
        <View
          style={{
            backgroundColor: styles.theme.colors.primary,
            height: '80%',
            width: '80%',
            borderRadius: 7,
            justifyContent: 'center',
            marginBottom: 3,
            padding: 5,
          }}>
          <Text
            style={{
              color: styles.theme.colors.fontsContrast,
              fontSize: 14,
              textAlign: 'center',
              fontWeight: '700',
            }}
            numberOfLines={2}>
            {Fecha}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: styles.theme.colors.primaryOpacity,
            borderRadius: 7,
            width: '80%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: styles.theme.colors.ternary,
              fontSize: 14,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            {Hora}
          </Text>
        </View>
      </View>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={{fontWeight: '700', fontSize: 18}}>
          Dr. {Id_doctor.Nombre}
        </Text>
        <Pressable onPress={seeComments} style={{marginVertical: 5}}>
          <Text style={{fontSize: 12, fontWeight: '400'}}>Ver Comentarios</Text>
        </Pressable>
        <Text>{Finalizada ? 'Cumplida' : 'Pendiente'}</Text>
      </View>
    </View>
  );
};

export default AgendaRegister;
