// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import BtnApp from '../components/Btn';

function Salir() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'Inter-Regular', fontSize: 20, marginBottom: 30 }}>
        ¿Seguro que quieres cerrar sesión?
      </Text>
      <BtnApp
        texto="Salir"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
}

export default Salir;
