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
  price,
}) => {
  const keyExtractor = React.useCallback(item => {
    item.id;
  }, []);

  const renderItem = React.useCallback(
    item => (
      <Card
        dates={item.item.dates}
        id={item.item.id}
        key={item.item.id}
        isFav={item.item.isFav}
        name={item.item.name}
        photo={item.item.photo}
        price={item.item.price}
        stars={item.item.stars}
        specialty={item.item.specialty}
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
        <Pressable>
          <Text style={styles.theme.fonts.font12}>Ver todos</Text>
        </Pressable>
      </View>
      <FlatList
        style={customStyle}
        data={list}
        horizontal={isHorizontal}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderItemSeparator}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default CardList;
