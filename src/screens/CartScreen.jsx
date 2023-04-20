// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import globalStyles from '../styles/GlobalStyles';
import BtnApp from '../components/Btn';
import ItemsCard from '../components/ItemsCart';
import { CartContext } from '../context/cartContext';

function PantallaCarrito({ navigation }) {
  const { cartItems, calculateTotal, removeFromCart } = useContext(CartContext); // Obtener los elementos del carrito del contexto
  const carritoLength = cartItems.length;

  const handleRemove = (item) => {
    removeFromCart(item);
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
              onPress={() => navigation.replace('OrderCompleteScreen')}
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
    </View>
  );
}

export default PantallaCarrito;
