// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Productos from '../screenss/ProductsScreen';
import AddProductScreen from '../screenss/AddProductScreen';
import EditProductScreen from '../screenss/EditProductScreen';
import DetailsProductScreen from '../screenss/DetailsProductScreen';

const Stack = createStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Productos" component={Productos} />
      <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
      <Stack.Screen name="EditProductScreen" component={EditProductScreen} />
      <Stack.Screen name="DetailsProductScreen" component={DetailsProductScreen} />
    </Stack.Navigator>
  );
}

export default ProductStack;
