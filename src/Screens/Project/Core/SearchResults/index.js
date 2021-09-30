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
import Icon from 'react-native-vector-icons/AntDesign';
import CardList from '../../../../Components/CardList';
import SpecialtyIcon from '../../../../Components/SpecialtyIcon';
import config from '../../../../config';
import styles from '../../../../styles';
import theme from '../../../../styles/theme';
import {useSelector, useDispatch} from 'react-redux';
import {cleanSearch, filter} from '../../../../store/reducers/searchReducer';
import ScreenHeader from '../../../../Components/ScreenHeader';

const SearchResultsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [activeTagIndex, setActiveTagIndex] = React.useState(0);
  const {docs, especialidades} = useSelector(state => ({
    docs: state.searchReducer.search,
    especialidades: state.dataReducer.especialidades,
  }));

  const [filterWords, setFilterWords] = React.useState('');
  const onSearch = React.useCallback(() => {
    dispatch(
      filter({Nombre: {$regex: filterWords, $options: 'i'}, IsDoctor: true}),
    );
    setFilterWords('');
  }, [filterWords]);

  const goBackScreen = React.useCallback(() => {
    dispatch(cleanSearch());
    navigation.goBack();
  }, []);

  const tags = React.useMemo(
    () => (
      <FlatList
        horizontal
        data={especialidades}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => (
          <Pressable
            style={
              activeTagIndex === index
                ? {
                    marginRight: 10,
                    backgroundColor: styles.theme.colors.primary,
                    paddingHorizontal: 6,
                    paddingVertical: 5,
                    borderRadius: 6,
                  }
                : {
                    marginRight: 10,
                    backgroundColor: styles.theme.colors.primaryOpacity,
                    paddingHorizontal: 6,
                    paddingVertical: 5,
                    borderRadius: 6,
                  }
            }
            onPress={() => {
              dispatch(filter({Especialidades: item._id}));
              setActiveTagIndex(index);
            }}>
            <Text
              style={
                activeTagIndex === index
                  ? styles.theme.fonts.font14White
                  : styles.theme.fonts.font14Off
              }>
              {item.Nombre}
            </Text>
          </Pressable>
        )}
      />
    ),
    [activeTagIndex],
  );

  return (
    <View
      style={[
        styles.layout.screensSpacing,
        {flex: 1, backgroundColor: styles.theme.colors.backgrounds},
      ]}>
      <View>
        <ScreenHeader onPress={goBackScreen} nameScreen="Home" />
        <View>
          <TextInput
            placeholder="Buscar"
            style={{
              height: 54,
              width: 335,
              borderRadius: 10,
              backgroundColor: theme.colors.fontsContrast,
              padding: 10,
              marginTop: 30,
            }}
            value={filterWords}
            onChangeText={text => setFilterWords(text)}
            onSubmitEditing={onSearch}
          />
        </View>
        <View style={{marginTop: 15}}>{tags}</View>
        <View style={{height: '78%'}}>
          <CardList list={docs} tipeView={config.CARD_TYPES.full} />
        </View>
      </View>
    </View>
  );
};

export default SearchResultsScreen;
