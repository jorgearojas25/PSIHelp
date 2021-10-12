import React from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import CardList from '../../../../Components/CardList';
import SpecialtyIcon from '../../../../Components/SpecialtyIcon';
import config from '../../../../config';
import docs from '../../../../mocks/docs';
import styles from '../../../../styles';
import theme from '../../../../styles/theme';
import {useSelector, useDispatch} from 'react-redux';
import {filter} from '../../../../store/reducers/searchReducer';
import {searchUserAgenda} from '../../../../store/reducers/userReducer';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user, searchList, especialidades, top} = useSelector(state => ({
    user: state.userReducer.user,
    searchList: state.searchReducer.search,
    especialidades: state.dataReducer.especialidades,
    top: state.searchReducer.top,
  }));
  // React.useEffect(
  //   () => console.log(user, searchList, especialidades, top),
  //   [user, searchList, especialidades, top],
  // );

  React.useLayoutEffect(() => {
    dispatch(searchUserAgenda({Id_usuario: user?._id}));
  }, [user]);

  const [filterWords, setFilterWords] = React.useState('');
  const onSearch = React.useCallback(() => {
    dispatch(
      filter({Nombre: {$regex: filterWords, $options: 'i'}, IsDoctor: true}),
    );
    setFilterWords('');
  }, [filterWords]);

  React.useEffect(() => {
    if ((searchList || []).length > 0) {
      navigation.navigate('SearchResults');
    }
  }, [searchList]);

  if (!user) {
    return null;
  }

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View
        style={[
          styles.components.homeHeader,
          styles.layout.screensSpacing,
          {paddingTop: 0},
        ]}>
        <View
          style={{
            width: '70%',
            height: '80%',
            justifyContent: 'space-evenly',
          }}>
          <Text style={styles.theme.fonts.font20White}>Hola {user.Nombre}</Text>
          <Text numberOfLines={2} style={styles.theme.fonts.font24WhiteBold}>
            Encuentra a tu profesional
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: 60,
              height: 60,
              marginTop: 20,
              borderRadius: 50,
              resizeMode: 'center',
            }}
            source={{
              uri: user.Foto,
            }}
          />
        </View>
      </View>
      <View
        style={[
          styles.layout.fullCenterContainer,
          styles.layout.screensSpacing,
          {backgroundColor: theme.colors.backgrounds},
        ]}>
        <TextInput
          placeholder="Buscar"
          style={{
            height: 54,
            width: 335,
            borderRadius: 6,
            backgroundColor: theme.colors.fontsContrast,
            padding: 10,
            transform: [{translateY: -55}],
          }}
          value={filterWords}
          onChangeText={text => setFilterWords(text)}
          onSubmitEditing={onSearch}
        />
        <FlatList
          style={{transform: [{translateY: -30}]}}
          horizontal
          data={especialidades}
          renderItem={data => (
            <Pressable
              onPress={() => dispatch(filter({Especialidades: data.item._id}))}>
              <SpecialtyIcon
                key={data.item._id}
                backgroundColor={data.item.Color}
                iconName={data.item.Icono}
              />
            </Pressable>
          )}
          keyExtractor={item => item.id}
        />
        <CardList
          isHorizontal={true}
          list={top}
          listName={'Top terapeutas'}
          tipeView={config.CARD_TYPES.large}
          seeOption
        />
        <View style={{width: '100%', marginTop: 20, marginBottom: 90}}>
          <CardList
            isHorizontal={true}
            list={top}
            listName={'Terapeutas disponibles'}
            tipeView={config.CARD_TYPES.small}
            seeOption
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
