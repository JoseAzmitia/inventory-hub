// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import globalStyles from '../styles/GlobalStyles';
import BtnApp from '../components/Btn';

function OrderCompleteScreen({ navigation }) {
  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Carrito</Text>
      <View style={globalStyles.botonCarrito}>
        <BtnApp
          texto="Ir a inicio"
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
        <Text style={globalStyles.orderNumber}>IH-9239-1283-3823</Text>
      </View>
      <View style={globalStyles.cancelOrderButton}>
        <BtnApp
          texto="Cancelar Orden"
          newColor
          color="#FF7474"
          onPress={() => console.log('Orden cancelada')}
        />
      </View>
    </View>
  );
}

export default OrderCompleteScreen;
