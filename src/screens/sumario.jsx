// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import SumarioCard from '../components/SumarioCard';
import ProductCard from '../components/ProductCard';

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
      <ProductCard
        image="https://static.wixstatic.com/media/3f119d_6c9d9e22c8cb4a0da762c3c15775d2b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
        name="Estilizador Gel Para Rizos"
        price={140}
      />
    </View>
  );
}

export default PantallaSumario;
