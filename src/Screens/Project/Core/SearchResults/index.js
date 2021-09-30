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
import docs from '../../../../mocks/docs';
import styles from '../../../../styles';
import theme from '../../../../styles/theme';

const SearchResultsScreen = () => {
  const [activeTagIndex, setActiveTagIndex] = React.useState(0);
  const searchTags = [
    {id: 1, name: 'Todos'},
    {id: 2, name: 'Psiquiatria'},
    {id: 3, name: 'Infantil'},
    {id: 4, name: 'Pareja'},
  ];
  const tags = React.useMemo(
    () => (
      <FlatList
        horizontal
        data={searchTags}
        keyExtractor={item => item.id}
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
            onPress={() => setActiveTagIndex(index)}>
            <Text
              style={
                activeTagIndex === index
                  ? styles.theme.fonts.font14White
                  : styles.theme.fonts.font14Off
              }>
              {item.name}
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: styles.theme.colors.white,
              width: 30,
              height: 30,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 15,
            }}>
            <Icon
              name="left"
              color={styles.theme.colors.fontsDetails}
              size={15}
            />
          </View>
          <Text style={styles.theme.fonts.font18Bold}>Home</Text>
        </View>
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
