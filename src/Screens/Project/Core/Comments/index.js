import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import ScreenHeader from '../../../../Components/ScreenHeader';
import {addComments} from '../../../../store/reducers/dataReducer';
import styles from '../../../../styles';

const CommentsScreen = ({navigation, route}) => {
  const [item, setItem] = React.useState(route.params);
  const dispatch = useDispatch();
  const {userData, updatedAgenda} = useSelector(state => ({
    userData: state.userReducer.user,
    updatedAgenda: state?.dataReducer?.date,
  }));

  const [filterWords, setFilterWords] = React.useState('');
  const onSearch = React.useCallback(() => {
    const updateThis = {
      ...item,
      Comentarios: [
        ...item?.Comentarios,
        {user: userData?._id, comment: filterWords},
      ],
    };
    console.log(updateThis);
    dispatch(addComments(updateThis));
    setFilterWords('');
  }, [filterWords]);

  React.useEffect(() => {
    if (updatedAgenda) {
      setItem(updatedAgenda);
      console.log('updateagenda', updatedAgenda);
    }
    console.log(item);
  }, [route, updatedAgenda]);

  const Comment = ({comment, user}) => {
    return (
      <Text
        style={{
          backgroundColor:
            userData?._id === user
              ? styles.theme.colors.primary
              : styles.theme.colors.ternary,
          width: '60%',
          color: styles.theme.colors.fontsContrast,
          fontSize: 14,
          fontWeight: '600',
          padding: 5,
          marginVertical: 10,
          alignSelf: userData?._id === user ? 'flex-end' : 'flex-start',
          borderRadius: 7,
        }}>
        {comment}
      </Text>
    );
  };

  return (
    <View
      style={[
        styles.layout.screensSpacing,
        {flex: 1, backgroundColor: styles.theme.colors.backgrounds},
      ]}>
      <ScreenHeader
        nameScreen="Comentarios"
        onPress={() => {
          setItem(null);
          navigation.goBack();
        }}
      />
      <ScrollView style={{marginTop: 50}}>
        {item?.Comentarios ? (
          item.Comentarios.map(com => <Comment {...com} />)
        ) : (
          <Text>No tienes mensajes</Text>
        )}
      </ScrollView>
      <View>
        <TextInput
          placeholder="Agregar Comentario"
          style={{
            height: 54,
            width: 335,
            borderRadius: 10,
            backgroundColor: styles.theme.colors.fontsContrast,
            padding: 10,
            marginTop: 30,
          }}
          value={filterWords}
          onChangeText={text => setFilterWords(text)}
          onSubmitEditing={onSearch}
        />
      </View>
    </View>
  );
};

export default CommentsScreen;
