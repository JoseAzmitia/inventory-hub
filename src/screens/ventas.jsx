// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import ActionButtons from '../components/ActionButtons';

function PantallaVentas() {
  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Ventas</Text>
      <ActionButtons
        actionText="Excel"
        actionIcon="ios-cloud-download"
        onPressOrder={() => console.log('Ordenando lista...')}
        onPressAction={() => console.log('Agregando producto...')}
      />
    </View>
  );
}

export default PantallaVentas;
