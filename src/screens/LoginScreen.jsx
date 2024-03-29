// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Network from 'expo-network';
import Toast from 'react-native-toast-message';
import { AuthContext } from '../context/authContext';
import InputWithIcon from '../components/InputWithIcon';
import BtnApp from '../components/Btn';

const logo = require('../assets/img/misc/logo.png');

function PantallaLogin() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async () => {
    // Lógica para realizar la autenticación
    const networkState = await Network.getNetworkStateAsync();

    if (!networkState.isConnected && !networkState.isInternetReachable) {
      // Mostrar mensaje de alerta
      Toast.show({
        type: 'info',
        text1: 'Conexión no detectada',
        text2: 'Conéctate a internet para iniciar sesión',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
      });
      return;
    }
    login(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory Hub</Text>
      <Image style={styles.image} source={logo} />
      <InputWithIcon
        title="Ingresa el correo"
        placeholder="example@mail.com"
        icon="ios-mail-outline"
        value={email}
        onChangeText={setEmail}
      />
      <InputWithIcon
        title="Ingresa la contraseña"
        placeholder="password"
        icon="ios-lock-closed-outline"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <BtnApp texto="Iniciar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontSize: 24,
    marginBottom: 14,
    color: '#000000',
    opacity: 0.5,
  },
  input: {
    width: '80%',
    height: 48,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    width: '90%',
    marginTop: 50,
    height: 48,
    backgroundColor: '#62CEB4',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-Regular',
    color: '#F2F2F2',
    fontSize: 16,
  },
  image: {
    width: 47,
    height: 41,
    marginBottom: 64,
  },
});

export default PantallaLogin;
