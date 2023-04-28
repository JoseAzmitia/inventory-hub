// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Productos from '../screens/ProductsScreen';
import AddProductScreen from '../screens/AddProductScreen';
import EditProductScreen from '../screens/EditProductScreen';
import DetailsProductScreen from '../screens/DetailsProductScreen';

const Stack = createStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F8F8F8',
          borderBottomColor: '#828282',
          borderBottomWidth: 0.5,
          height: 74.5,
        },
        headerTintColor: '#828282',
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: 'Inter-Regular',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Productos" component={Productos} />
      <Stack.Screen name="Nuevo producto" component={AddProductScreen} />
      <Stack.Screen name="Editar producto" component={EditProductScreen} />
      <Stack.Screen name="Detalles del producto" component={DetailsProductScreen} />
    </Stack.Navigator>
  );
}

export default ProductStack;
