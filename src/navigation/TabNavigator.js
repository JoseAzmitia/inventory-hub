// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// pantallas
import PantallaSumario from '../screens/Sumario';
import PantallaProductos from '../screens/Productos';
import PantallaVentas from '../screens/Ventas';
import PantallaCarrito from '../screens/Carrito';
import Salir from '../screens/Salir';

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
