// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import BtnApp from '../components/Btn';

function PantallaCarrito() {
  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Carrito</Text>
      <View style={globalStyles.botonCarrito}>
        <BtnApp
          texto="Total: $420"
          icon="monetization-on"
          secondIcon="arrow-forward"
          onPress={() => console.log('Orden completada')}
        />
      </View>
    </View>
  );
}

export default PantallaCarrito;
