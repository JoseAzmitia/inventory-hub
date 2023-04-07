// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import ActionButtons from '../components/ActionButtons';

function PantallaProductos() {
  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Productos</Text>
      <ActionButtons
        actionText="Agregar"
        actionIcon="add-circle"
        onPressOrder={() => console.log('Ordenando lista...')}
        onPressAction={() => console.log('Agregando producto...')}
      />
    </View>
  );
}

export default PantallaProductos;
