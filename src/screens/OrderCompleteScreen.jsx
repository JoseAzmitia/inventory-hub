// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Text, View } from 'react-native';
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
      <Text style={globalStyles.titleText}>Carrito</Text>
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
            texto="Sí, eliminar orden"
            onPress={() => {
              setModalOrder(false);
              handleDeleteOrder();
            }}
          />
          <BtnApp texto="Cancelar" newColor color="#FF7575" onPress={() => setModalOrder(false)} />
        </View>
      </Modal>
      <View style={globalStyles.cancelOrderButton}>
        <BtnApp texto="Cancelar Orden" newColor color="#FF7474" onPress={handleDeleteOrder} />
      </View>
    </View>
  );
}

export default OrderCompleteScreen;
