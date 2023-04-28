// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import * as Network from 'expo-network';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import globalStyles from '../styles/GlobalStyles';
import BtnApp from '../components/Btn';
import ItemsCard from '../components/ItemsCart';
import { CartContext } from '../context/cartContext';
import { AuthContext } from '../context/authContext';
import { createOrder } from '../services/orderService';

function PantallaCarrito({ navigation }) {
  const { cartItems, calculateTotal, removeFromCart, clearCart } = useContext(CartContext); // Obtener los elementos del carrito del contexto
  const carritoLength = cartItems.length;
  const { userInfo } = useContext(AuthContext);
  const userId = userInfo.user;
  const [modalOrder, setModalOrder] = useState(false);

  const checkConnectivity = async () => {
    const networkState = await Network.getNetworkStateAsync();
    if (!networkState.isConnected && !networkState.isInternetReachable) {
      // Mostrar mensaje de alerta
      Toast.show({
        type: 'info',
        text1: 'Conexión no detectada',
        text2: 'Conéctate a internet para realizar esta acción',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
      });
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
  };

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleCreateOrder = async () => {
    const isConnected = await checkConnectivity();
    if (!isConnected) {
      return;
    }
    try {
      const products = cartItems;
      const response = await createOrder(userId, products);
      if (response && response.id) {
        const storedOrders = await AsyncStorage.getItem('orders');
        let orders = [];
        if (storedOrders) {
          orders = JSON.parse(storedOrders);
        }
        orders.push(response);
        AsyncStorage.setItem('orders', JSON.stringify(orders));
        clearCart();
        navigation.replace('OrderCompleteScreen', { orderId: response.id });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={globalStyles.contenedor}>
      {carritoLength > 0 ? (
        <>
          <View style={globalStyles.botonCarrito}>
            <BtnApp
              texto="Crear orden"
              secondIcon="arrow-forward"
              onPress={() => setModalOrder(true)}
            />
          </View>
          {/* Iterar sobre los elementos del carrito y crear un componente ItemsCard para cada uno */}
          <ScrollView style={globalStyles.contenedorItemsCart}>
            {cartItems.map((item) => (
              <ItemsCard
                key={item.id} // Es importante que cada componente tenga una key única
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onPress={() => handleRemove(item)}
              />
            ))}
          </ScrollView>
          <View style={globalStyles.contenedorCartTotal}>
            <Text style={globalStyles.textContenedorCartTotal}>{`Total: $${calculateTotal(
              cartItems
            ).toFixed(2)}`}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={globalStyles.botonCarrito}>
            <BtnApp
              texto="Ver los productos"
              onPress={() => navigation.navigate('ProductStack', { screen: 'Productos' })}
            />
          </View>
          <Text style={globalStyles.tittleCartEmpty}>Crea un nuevo carrito</Text>
          <Text style={globalStyles.textCartEmpty}>Agrega productos para crear una orden.</Text>
        </>
      )}
      <Modal isVisible={modalOrder}>
        <View style={globalStyles.modalContainer}>
          <Text style={globalStyles.modalText}>¿Confirma crear la orden?</Text>
          <BtnApp
            texto="Crear orden"
            onPress={() => {
              setModalOrder(false);
              handleCreateOrder();
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
    </View>
  );
}

export default PantallaCarrito;
