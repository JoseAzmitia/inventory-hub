// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import globalStyles from '../styles/GlobalStyles';
import BtnApp from '../components/Btn';
import { deleteOrder } from '../services/orderService';

function OrderCompleteScreen({ navigation, route }) {
  const { orderId } = route.params;
  const [modalOrder, setModalOrder] = useState(false);

  const handleDeleteOrder = async () => {
    try {
      await deleteOrder(orderId);
      const orders = JSON.parse(await AsyncStorage.getItem('orders')) || [];
      const updatedOrders = orders.filter((order) => order.id !== orderId);
      AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
      navigation.reset({
        index: 0,
        routes: [{ name: 'ProductStack', params: { screen: 'Productos' } }],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={globalStyles.contenedor}>
      <View style={globalStyles.botonCarrito}>
        <BtnApp
          texto="Ir al catálogo"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'ProductStack', params: { screen: 'Productos' } }],
            })
          }
        />
      </View>
      <Text style={globalStyles.tittleCartEmpty}>Orden completada</Text>
      <Ionicons name="ios-checkmark-circle" style={globalStyles.iconOrderComplete} />
      <View style={globalStyles.orderNumberContainer}>
        <Text style={globalStyles.orderNumberTittle}>Número de orden:</Text>
        <Text style={globalStyles.orderNumber}>{`IH-${orderId}`}</Text>
      </View>
      <Modal isVisible={modalOrder}>
        <View style={globalStyles.modalContainer}>
          <Text style={globalStyles.modalText}>¿Confirma eliminar la orden?</Text>
          <BtnApp
            newColor
            color="#FF7474"
            texto="Eliminar orden"
            onPress={() => {
              setModalOrder(false);
              handleDeleteOrder();
            }}
          />
          <BtnApp
            texto="Cancelar"
            newColor
            border
            color="#828282"
            onPress={() => setModalOrder(false)}
          />
        </View>
      </Modal>
      <View style={globalStyles.cancelOrderButton}>
        <BtnApp
          texto="Cancelar Orden"
          newColor
          border
          color="#FF7474"
          onPress={() => setModalOrder(true)}
        />
      </View>
    </View>
  );
}

export default OrderCompleteScreen;
