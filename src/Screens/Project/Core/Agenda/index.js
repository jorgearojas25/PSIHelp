import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AgendaRegister from '../../../../Components/AgendaRegister';
import ScreenHeader from '../../../../Components/ScreenHeader';
import {searchUserAgenda} from '../../../../store/reducers/userReducer';
import styles from '../../../../styles';

const AgendaScren = ({navigation}) => {
  const dispatch = useDispatch();
  const {user, userAgenda} = useSelector(state => ({
    user: state.userReducer.user,
    userAgenda: state?.userReducer?.userAgenda,
  }));

  React.useLayoutEffect(() => {
    const search = user?.IsDoctor
      ? {Id_doctor: user?._id}
      : {Id_usuario: user?._id};
    dispatch(searchUserAgenda(search));
  }, [user]);

  return (
    <View
      style={[
        styles.layout.screensSpacing,
        {flex: 1, backgroundColor: styles.theme.colors.backgrounds},
      ]}>
      <ScreenHeader nameScreen="Agenda" onPress={() => navigation.goBack()} />
      <View style={{marginTop: 50}}>
        {userAgenda &&
          userAgenda.map(ag => <AgendaRegister isAgenda item={ag} {...ag} />)}
      </View>
    </View>
  );
};

export default AgendaScren;
