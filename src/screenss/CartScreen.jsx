// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import globalStyles from '../styles/GlobalStyles';
import BtnApp from '../components/Btn';
import ItemsCard from '../components/ItemsCart';
import { CartContext } from '../context/cartContext';
import { AuthContext } from '../context/authContext';
import { createOrder } from '../servicess/orderService';

function PantallaCarrito({ navigation }) {
  const { cartItems, calculateTotal, removeFromCart, clearCart } = useContext(CartContext); // Obtener los elementos del carrito del contexto
  const carritoLength = cartItems.length;
  const { userInfo } = useContext(AuthContext);
  const userId = userInfo.user;
  const [modalOrder, setModalOrder] = useState(false);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleCreateOrder = async () => {
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
      <Text style={globalStyles.titleText}>Carrito</Text>
      {carritoLength > 0 ? (
        <>
          <View style={globalStyles.botonCarrito}>
            <BtnApp
              texto={`Total: $${calculateTotal(cartItems).toFixed(2)}`}
              icon="monetization-on"
              secondIcon="arrow-forward"
              onPress={() => setModalOrder(true)}
            />
          </View>
          {/* Iterar sobre los elementos del carrito y crear un componente ItemsCard para cada uno */}
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
        </>
      ) : (
        <>
          <View style={globalStyles.botonCarrito}>
            <BtnApp texto="Ir al catálogo" onPress={() => navigation.navigate('Productos')} />
          </View>
          <Text style={globalStyles.tittleCartEmpty}>Tu carrito está vacío</Text>
          <Text style={globalStyles.textCartEmpty}>
            Intenta agregar productos desde el catálogo.
          </Text>
        </>
      )}
      <Modal isVisible={modalOrder}>
        <View style={globalStyles.modalContainer}>
          <Text style={globalStyles.modalText}>¿Confirma crear la orden?</Text>
          <BtnApp
            texto="Sí, crear orden"
            onPress={() => {
              setModalOrder(false);
              handleCreateOrder();
            }}
          />
          <BtnApp texto="Cancelar" newColor color="#FF7575" onPress={() => setModalOrder(false)} />
        </View>
      </Modal>
    </View>
  );
}

export default PantallaCarrito;
