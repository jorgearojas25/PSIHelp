import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from '../../styles';
import {useNavigation} from '@react-navigation/native';

const UserForm = () => {
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [celular, setCelular] = React.useState('');
  const [password, setPassword] = React.useState('');

  const registerUser = React.useCallback(() => {
    // registe user and then
    navigation.navigate('Login');
  }, []);

  return (
    <View style={[styles.layout.centerView, styles.components.userForm]}>
      <TextInput
        style={styles.components.formInput}
        placeholder="Nombre"
        value={name}
        onChange={text => setName(text)}
      />
      <TextInput
        style={[styles.components.formInput, {marginTop: 20}]}
        placeholder="Celular"
        keyboardType="numeric"
        value={celular}
        onChange={text => setCelular(text)}
      />
      <TextInput
        style={[styles.components.formInput, {marginTop: 20}]}
        placeholder="Email"
        textContentType="emailAddress"
        keyboardType="email-address"
        value={email}
        onChange={text => setEmail(text)}
      />
      <TextInput
        style={[styles.components.formInput, {marginTop: 20}]}
        placeholder="Password"
        textContentType="password"
        autoCompleteType="password"
        secureTextEntry
        value={password}
        onChange={text => setPassword(text)}
      />
      <Pressable onPress={registerUser} style={styles.components.loginButton}>
        <Text style={styles.theme.fonts.font18Contrast}>Registrarme</Text>
      </Pressable>
    </View>
  );
};

export default UserForm;
