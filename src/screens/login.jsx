// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import InputWithIcon from '../components/InputWithIcon';

const logo = require('../assets/img/misc/logo.png');

function PantallaLogin() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para realizar la autenticación
    login();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory Hub</Text>
      <Image style={styles.image} source={logo} />
      <InputWithIcon
        title="Ingresa el correo"
        placeholder="example@mail.com"
        icon="ios-mail-outline"
        value={username}
        onChangeText={setUsername}
      />
      <InputWithIcon
        title="Contraseña"
        placeholder="password"
        icon="eye-off-outline"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 47,
    height: 41,
    marginBottom: 64,
  },
});

export default PantallaLogin;
