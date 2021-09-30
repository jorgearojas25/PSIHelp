import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {registerDoctor} from '../../store/reducers/userReducer';

const DoctorForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [celular, setCelular] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [tarjeta, setTarjeta] = React.useState('');
  const user = useSelector(state => state.userReducer.user);

  const registerUser = () => {
    dispatch(
      registerDoctor({
        name: name,
        phone: celular,
        email: email,
        password: password,
        tarjetaProfesional: tarjeta,
      }),
    );
  };

  React.useEffect(() => {
    if (user?._id !== undefined) {
      navigation.navigate('MainScreen');
    }
  }, [user]);

  return (
    <View style={[styles.layout.centerView, styles.components.userForm]}>
      <TextInput
        style={styles.components.formInput}
        placeholder="Nombre"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={[styles.components.formInput, {marginTop: 20}]}
        placeholder="Celular"
        keyboardType="numeric"
        value={celular}
        onChangeText={text => setCelular(text)}
      />
      <TextInput
        style={[styles.components.formInput, {marginTop: 20}]}
        placeholder="Email"
        textContentType="emailAddress"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={[styles.components.formInput, {marginTop: 20}]}
        placeholder="Tarjeta Profesional"
        textContentType="emailAddress"
        keyboardType="numeric"
        value={tarjeta}
        onChangeText={text => setTarjeta(text)}
      />
      <TextInput
        style={[styles.components.formInput, {marginTop: 20}]}
        placeholder="Password"
        textContentType="password"
        autoCompleteType="password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Pressable onPress={registerUser} style={styles.components.loginButton}>
        <Text style={styles.theme.fonts.font18Contrast}>Registrarme</Text>
      </Pressable>
    </View>
  );
};

export default DoctorForm;
