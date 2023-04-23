// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { AuthContext } from '../context/authContext';
import InputWithIcon from '../components/InputWithIcon';

const logo = require('../assets/img/misc/logo.png');

function PantallaLogin() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = () => {
    // Lógica para realizar la autenticación
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
