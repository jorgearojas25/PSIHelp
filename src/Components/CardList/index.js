import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import styles from '../../styles';
import Card from '../Card';

const CardList = ({
  isHorizontal,
  list,
  listName,
  tipeView,
  customStyle,
  seeOption,
}) => {
  const keyExtractor = React.useCallback(item => {
    item.id;
  }, []);

  const renderItem = React.useCallback(
    item => (
      <Card
        item={item.item}
        dates={item.item.Numero_citas}
        id={item.item._id}
        key={item.item._id}
        isFav={false}
        name={item.item.Nombre}
        photo={item.item.Foto}
        price={item.item.Costo}
        stars={item.item.Calificaion}
        specialty={'' || 'General'}
        typeView={tipeView}
      />
    ),
    [],
  );

  const renderItemSeparator = React.useCallback(
    item => <View style={styles.layout.itemsSpacing} />,
    [],
  );

  return (
    <>
      <View
        style={[
          {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
            height: 30,
            width: '100%',
            justifyContent: 'space-between',
          },
          customStyle,
        ]}>
        <Text style={styles.theme.fonts.font18Bold}>{listName}</Text>
        {seeOption && (
          <Pressable>
            <Text style={styles.theme.fonts.font12}>Ver todos</Text>
          </Pressable>
        )}
      </View>
      <FlatList
        style={customStyle}
        data={list}
        horizontal={isHorizontal}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderItemSeparator}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default CardList;
