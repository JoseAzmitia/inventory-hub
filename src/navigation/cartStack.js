// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaCarrito from '../screenss/CartScreen';
import OrderCompleteScreen from '../screenss/OrderCompleteScreen';

const Stack = createStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PantallaCarrito" component={PantallaCarrito} />
      <Stack.Screen name="OrderCompleteScreen" component={OrderCompleteScreen} />
    </Stack.Navigator>
  );
}

export default ProductStack;
