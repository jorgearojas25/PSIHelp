import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import config from '../../config';
import styles from '../../styles';
import {useNavigation} from '@react-navigation/native';

// components
import CardLarge from './CardLarge';
import CardSmall from './CardSmall';
import CardFull from './CardFull';

const Card = ({
  item,
  typeView,
  id,
  photo,
  name,
  stars,
  isFav,
  dates,
  specialty,
  price,
}) => {
  const navigation = useNavigation();

  const navigateSchedule = React.useCallback(() => {
    navigation.navigate('Schedule', item);
  }, [navigation]);

  if (config.CARD_TYPES.large === typeView) {
    return (
      <Pressable onPress={navigateSchedule}>
        <CardLarge
          id={id}
          key={id}
          name={name}
          photo={photo}
          specialty={specialty}
          stars={stars}
        />
      </Pressable>
    );
  }

  if (config.CARD_TYPES.small === typeView) {
    return (
      <Pressable onPress={navigateSchedule}>
        <CardSmall
          id={id}
          isFav={isFav}
          key={id}
          name={name}
          photo={photo}
          specialty={specialty}
          stars={stars}
          price={price}
        />
      </Pressable>
    );
  }
  if (config.CARD_TYPES.full === typeView) {
    return (
      <Pressable onPress={navigateSchedule}>
        <CardFull
          id={id}
          isFav={isFav}
          key={id}
          name={name}
          photo={photo}
          specialty={specialty}
          stars={stars}
          price={price}
          dates={dates}
        />
      </Pressable>
    );
  }

  return (
    <View style={[styles.components.cardLarge]}>
      {docPhoto}
      <View style={styles.layout.fullCenterContainer}>
        <Text style={styles.theme.fonts.font18Bold}>Dr. {name}</Text>
        <Text style={styles.theme.fonts.font12}>{specialty}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingBottom: 15,
        }}>
        {starsShown}
      </View>
    </View>
  );
};

export default Card;
