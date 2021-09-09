import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {config} from '../../config';
import styles from '../../styles';

const Card = ({typeView, id, photo, name, stars, isFav, dates, specialty}) => {
  const docPhoto = React.useMemo(() => {
    if (typeView === config.CARD_TYPES.large) {
      return (
        <Image
          source={{uri: photo}}
          style={{
            width: '100%',
            height: '70%',
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}
        />
      );
    }
  }, [typeView, photo]);

  const starsShown = React.useMemo(() => {
    if (typeView === config.CARD_TYPES.large) {
      return Array(5)
        .fill({}, 0, 5)
        .map((st, index) =>
          index < stars ? (
            <Icon
              style={{width: 12}}
              name="star"
              color={styles.theme.colors.stars}
              size={12}
            />
          ) : (
            <Icon
              style={{width: 12}}
              name="star"
              color={styles.theme.colors.contrast}
              size={12}
            />
          ),
        );
    }
  }, [stars, typeView]);

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
