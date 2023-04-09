// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import BtnApp from '../components/Btn';
import ItemsCard from '../components/ItemsCart';

function PantallaCarrito({ navigation }) {
  const carrito = {}; // Objeto vacío de ejemplo
  const carritoLength = Object.keys(carrito).length;
  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Carrito</Text>
      {carritoLength > 0 ? (
        <>
          <View style={globalStyles.botonCarrito}>
            <BtnApp
              texto="Total: $420"
              icon="monetization-on"
              secondIcon="arrow-forward"
              onPress={() => console.log('Orden completada')}
            />
          </View>
          <ItemsCard
            image="https://static.wixstatic.com/media/3f119d_6c9d9e22c8cb4a0da762c3c15775d2b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
            name="Estilizador Gel Para Rizos"
            price="280"
            quantity={3}
          />
          <ItemsCard
            image="https://static.wixstatic.com/media/3f119d_6c9d9e22c8cb4a0da762c3c15775d2b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
            name="Estilizador Gel Para Rizos"
            price="280"
            quantity={3}
          />
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
