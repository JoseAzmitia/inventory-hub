// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import PantallaLogin from './screens/login/login';
import PantallaSumario from './screens/sumario/sumario';
import PantallaProductos from './screens/productos/productos';
import PantallaVentas from './screens/ventas/ventas';
import PantallaCarrito from './screens/carrito/carrito';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={PantallaLogin} />
        <Tab.Screen name="Sumario" component={PantallaSumario} />
        <Tab.Screen name="Productos" component={PantallaProductos} />
        <Tab.Screen name="Ventas" component={PantallaVentas} />
        <Tab.Screen name="Carrito" component={PantallaCarrito} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
