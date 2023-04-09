// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import ActionButtons from '../components/ActionButtons';
import Table from '../components/OrdersTable';

function PantallaVentas() {
  const pedidos = [
    { id: 1, fecha: '10/02/2023', items: 3, total: 620.0 },
    { id: 2, fecha: '12/02/2023', items: 1, total: 140.0 },
    { id: 3, fecha: '15/02/2023', items: 4, total: 760.0 },
    { id: 4, fecha: '10/02/2023', items: 3, total: 620.0 },
    { id: 5, fecha: '12/02/2023', items: 1, total: 240.0 },
    { id: 6, fecha: '15/02/2023', items: 2, total: 280.0 },
  ];

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Ventas</Text>
      <ActionButtons
        actionText="Excel"
        actionIcon="ios-cloud-download"
        onPressOrder={() => console.log('Ordenando lista...')}
        onPressAction={() => console.log('Agregando producto...')}
      />
      <Table data={pedidos} />
    </View>
  );
}

export default PantallaVentas;
