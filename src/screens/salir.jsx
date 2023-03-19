// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

function Salir() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>¿Seguro que quieres cerrar sesión?</Text>
      <Button
        title="Cerrar sesión"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
}

export default Salir;
