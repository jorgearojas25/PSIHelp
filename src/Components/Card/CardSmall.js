import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles';

const CardSmall = ({id, photo, name, stars, isFav, price}) => {
  const [favDoc, setFavDoc] = React.useState(isFav);

  const docPhoto = React.useMemo(
    () => (
      <Image
        source={{uri: photo}}
        style={{
          width: 54,
          height: 54,
          borderRadius: 50,
          alignSelf: 'center',
        }}
      />
    ),
    [photo],
  );

  const starsShown = React.useMemo(
    () => (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
        <Icon
          style={{width: 12}}
          name="star"
          color={styles.theme.colors.stars}
          size={12}
        />
        <Text>{stars}</Text>
      </View>
    ),
    [stars],
  );

  const favButton = React.useMemo(
    () =>
      isFav ? (
        <Pressable style={{marginLeft: 10}}>
          <Icon name="heart" color={styles.theme.colors.favs} size={12}></Icon>
        </Pressable>
      ) : (
        <Pressable style={{marginLeft: 10}}>
          <Icon
            name="heart"
            color={styles.theme.colors.contrast}
            size={12}></Icon>
        </Pressable>
      ),
    [isFav],
  );

  return (
    <View key={id} style={[styles.components.cardSmall]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        {favButton}
        {starsShown}
      </View>
      {docPhoto}
      <View style={styles.layout.fullCenterContainer}>
        <Text numberOfLines={1} style={styles.theme.fonts.font12title}>
          Dr. {name}
        </Text>
        <Text style={styles.theme.fonts.font12}>${price}/h</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingBottom: 15,
        }}></View>
    </View>
  );
};

export default CardSmall;
