// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// pantallas
import PantallaSumario from '../screens/sumario';
import PantallaProductos from '../screens/productos';
import PantallaVentas from '../screens/ventas';
import PantallaCarrito from '../screens/carrito';
import Salir from '../screens/salir';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sumario" component={PantallaSumario} />
      <Tab.Screen name="Productos" component={PantallaProductos} />
      <Tab.Screen name="Ventas" component={PantallaVentas} />
      <Tab.Screen name="Carrito" component={PantallaCarrito} />
      <Tab.Screen name="Salir" component={Salir} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
