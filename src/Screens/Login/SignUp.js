import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import styles from '../../styles';

// forms
import UserForm from './UserForm';
import DoctorForm from './DoctorForm';

const SignUp = ({navigation}) => {
  const [showUserForm, setShowUserForm] = React.useState(true);

  const actualForm = React.useMemo(() => {
    if (showUserForm) {
      return <UserForm />;
    } else {
      return <DoctorForm />;
    }
  }, [showUserForm]);

  return (
    <View style={styles.layout.simpleView}>
      <View style={[styles.components.headerTitle, {marginTop: '20%'}]}>
        <Text style={styles.theme.fonts.font24Title}>
          Unete a nuestra red de ayuda
        </Text>
        <Text
          numberOfLines={2}
          style={[
            styles.theme.fonts.font14,
            {marginTop: 10, textAlign: 'center'},
          ]}>
          Al unirte a nuestra red puedes encontrar infinidad de terapeutas en
          cuestion de segundos
        </Text>
      </View>
      <View style={[styles.layout.centerView, styles.components.signupForm]}>
        <View style={styles.layout.formSelector}>
          <Pressable
            onPress={() => setShowUserForm(false)}
            style={
              showUserForm
                ? styles.state.formButton
                : styles.state.formButtonActive
            }>
            <Text
              style={
                showUserForm
                  ? styles.theme.fonts.font16Light
                  : styles.theme.fonts.font16LightContrast
              }>
              Profesional
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setShowUserForm(true)}
            style={
              showUserForm
                ? styles.state.formButtonActive
                : styles.state.formButton
            }>
            <Text
              style={
                showUserForm
                  ? styles.theme.fonts.font16LightContrast
                  : styles.theme.fonts.font16Light
              }>
              Usuario
            </Text>
          </Pressable>
        </View>
        {actualForm}
      </View>
      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={[styles.layout.centerView, {marginTop: '10%'}]}>
        <Text style={styles.theme.fonts.font14Primary}>
          ¿Ya estas registrado? Iniciar sesion
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUp;
