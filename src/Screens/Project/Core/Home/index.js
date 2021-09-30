import React from 'react';
import {Image, View, Text, TextInput, FlatList, ScrollView} from 'react-native';
import CardList from '../../../../Components/CardList';
import SpecialtyIcon from '../../../../Components/SpecialtyIcon';
import config from '../../../../config';
import docs from '../../../../mocks/docs';
import styles from '../../../../styles';
import theme from '../../../../styles/theme';

const HomeScreen = () => {
  const categories = [
    {id: 11, iconName: 'black-tie', backgroundColor: theme.colors.secondary},
    {id: 12, iconName: 'vcard', backgroundColor: '#FE7F44'},
    {id: 13, iconName: 'quora', backgroundColor: '#FF484C'},
  ];
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
          <Text style={styles.theme.fonts.font20White}>Hola Jorge</Text>
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
              uri: 'data:image/jpeg;base64,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',
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
        />
        <FlatList
          style={{transform: [{translateY: -30}]}}
          horizontal
          data={categories}
          renderItem={data => (
            <SpecialtyIcon
              backgroundColor={data.item.backgroundColor}
              iconName={data.item.iconName}
            />
          )}
          keyExtractor={item => item.id}
        />
        <CardList
          isHorizontal={true}
          list={docs}
          listName={'Top terapeutas'}
          tipeView={config.CARD_TYPES.large}
          seeOption
        />
        <View style={{width: '100%', marginTop: 20, marginBottom: 90}}>
          <CardList
            isHorizontal={true}
            list={docs}
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
