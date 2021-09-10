import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {config} from '../../config';
import styles from '../../styles';

// components
import CardLarge from './CardLarge';
import CardSmall from './CardSmall';
import CardFull from './CardFull';

const Card = ({
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
  if (config.CARD_TYPES.large === typeView) {
    return (
      <CardLarge
        id={id}
        key={id}
        name={name}
        photo={photo}
        specialty={specialty}
        stars={stars}
      />
    );
  }

  if (config.CARD_TYPES.small === typeView) {
    return (
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
    );
  }
  if (config.CARD_TYPES.full === typeView) {
    return (
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
