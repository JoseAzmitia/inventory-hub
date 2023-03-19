// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaLogin from '../screens/login';
import PantallaBienvenida from '../screens/bienvenida';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bienvenida" component={PantallaBienvenida} />
      <Stack.Screen name="Login" component={PantallaLogin} />
    </Stack.Navigator>
  );
}

export default AuthStack;
