// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../styles/GlobalStyles';
import ActionButtonsV2 from '../components/ActionButtonsV2';
import Table from '../components/OrdersTable';
import { getOrdersByUserId } from '../services/orderService';
import { AuthContext } from '../context/authContext';

function PantallaVentas() {
  const { userInfo } = useContext(AuthContext);
  const userId = userInfo.user;
  const [orderType, setOrderType] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Verificar si existen órdenes en AsyncStorage
    AsyncStorage.getItem('orders')
      .then((storedOrders) => {
        if (storedOrders) {
          // Si las órdenes existen, actualizar el estado con ellas
          setOrders(JSON.parse(storedOrders));
        } else {
          // Si no existen, llamar a la API para obtenerlas
          console.log('api llamada en SalesScreen');
          getOrdersByUserId(userId)
            .then((fetchedOrders) => {
              // Actualizar el estado con las órdenes obtenidas
              setOrders(fetchedOrders);
              // Guardar las órdenes en AsyncStorage
              AsyncStorage.setItem('orders', JSON.stringify(fetchedOrders));
            })
            .catch((error) => console.error(error));
        }
      })
      .catch((error) => console.error(error));
  }, [userId]);

  useEffect(() => {
    AsyncStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleOrderOptionPress = (value) => {
    setOrderType(value);
  };

  const orderedOrders = () => {
    switch (orderType) {
      case 'date_desc':
        return [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'date_asc':
        return [...orders].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      case 'items_desc':
        return [...orders].sort((a, b) => b.items - a.items);
      case 'items_asc':
        return [...orders].sort((a, b) => a.items - b.items);
      case 'total_desc':
        return [...orders].sort((a, b) => b.totalValue - a.totalValue);
      case 'total_asc':
        return [...orders].sort((a, b) => a.totalValue - b.totalValue);
      default:
        return orders;
    }
  };

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Ventas</Text>
      <ActionButtonsV2
        actionText="Excel"
        actionIcon="ios-cloud-download"
        handleOrderOptionPress={handleOrderOptionPress}
        onPressAction={() => console.log('Agregando producto...')}
      />
      <Table data={orderedOrders()} />
    </View>
  );
}

export default PantallaVentas;
