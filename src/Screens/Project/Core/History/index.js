import React from 'react';
import {View, Text, BackHandler} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AgendaRegister from '../../../../Components/AgendaRegister';
import ScreenHeader from '../../../../Components/ScreenHeader';
import {searchUserAgenda} from '../../../../store/reducers/userReducer';
import styles from '../../../../styles';

const HistoryScreen = ({navigation}) => {
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
      <ScreenHeader
        nameScreen="Historial"
        onPress={() => navigation.goBack()}
      />
      <View style={{marginTop: 50}}>
        {userAgenda &&
          userAgenda.map(ag => <AgendaRegister item={ag} {...ag} />)}
      </View>
    </View>
  );
};

export default HistoryScreen;
