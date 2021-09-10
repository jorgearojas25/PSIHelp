import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles';

const CardFull = ({id, photo, name, stars, isFav, specialty, dates}) => {
  const docPhoto = React.useMemo(
    () => (
      <Image
        source={{uri: photo}}
        style={{
          width: 82,
          height: 82,
          borderRadius: 7,
        }}
      />
    ),
    [photo],
  );

  const starsShown = React.useMemo(
    () =>
      Array(5)
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
        ),

    [stars],
  );

  const favButton = React.useMemo(
    () =>
      isFav ? (
        <Pressable style={{marginLeft: 10}}>
          <Icon name="heart" color={styles.theme.colors.favs} size={20}></Icon>
        </Pressable>
      ) : (
        <Pressable style={{marginLeft: 10}}>
          <Icon
            name="heart"
            color={styles.theme.colors.contrast}
            size={20}></Icon>
        </Pressable>
      ),
    [isFav],
  );

  return (
    <View key={id} style={[styles.components.cardFull]}>
      <View>{docPhoto}</View>
      <View
        style={{
          width: '70%',
          height: '100%',
          justifyContent: 'space-evenly',
          paddingLeft: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.theme.fonts.font18Bold}>Dr. {name}</Text>
          {favButton}
        </View>
        <Text style={styles.theme.fonts.font14Contrast}>{specialty}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>{starsShown}</View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.theme.fonts.font12}>({dates} visitas)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardFull;
