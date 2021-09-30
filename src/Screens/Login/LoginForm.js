import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import styles from '../../styles';
import {useNavigation} from '@react-navigation/native';

const LoginForm = () => {
  const navigation = useNavigation();
  const loginUser = React.useCallback(() => {
    //login, save user on storage
    navigation.navigate('MainScreen');
  }, []);
  return (
    <View style={styles.layout.simpleView}>
      <View style={styles.components.headerTitle}>
        <Text style={styles.theme.fonts.font24Title}>¡Hola de nuevo!</Text>
        <Text style={[styles.theme.fonts.font14, {marginTop: 10}]}>
          Dispones de una amplia red de ayuda mutua
        </Text>
      </View>
      <View style={[styles.layout.centerView, styles.components.loginForm]}>
        <TextInput
          style={styles.components.formInput}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={[styles.components.formInput, {marginTop: 20}]}
          placeholder="Password"
          textContentType="password"
        />
        <Pressable onPress={loginUser} style={styles.components.loginButton}>
          <Text style={styles.theme.fonts.font18Contrast}>Iniciar Sesion</Text>
        </Pressable>
        <Pressable>
          <Text style={[styles.theme.fonts.font14Primary, {marginTop: 10}]}>
            Olvide mi contraseña
          </Text>
        </Pressable>
      </View>
      <Pressable
        onPress={() => navigation.navigate('SignUp')}
        style={[styles.layout.centerView, {marginTop: '30%'}]}>
        <Text style={styles.theme.fonts.font14Primary}>
          ¿Aun no tienes cuenta? Unete
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
