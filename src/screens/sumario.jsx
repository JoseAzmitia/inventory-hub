// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import SumarioCard from '../components/SumarioCard';

function PantallaSumario() {
  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Sumario</Text>
      <SumarioCard title="Ventas" quantity={15} variable="Ingresos" value="3400.00" />
      <SumarioCard
        title="Productos en inventario"
        quantity={250}
        variable="Valor total"
        value="30000.00"
      />
    </View>
  );
}

export default PantallaSumario;
