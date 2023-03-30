/* eslint-disable react/no-unstable-nested-components */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// pantallas
import PantallaSumario from '../screens/Sumario';
import PantallaProductos from '../screens/Productos';
import PantallaVentas from '../screens/Ventas';
import PantallaCarrito from '../screens/Carrito';
import Salir from '../screens/Salir';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        tabBarInactiveTintColor: '#828282',
        tabBarActiveTintColor: '#27AE60',
      }}
    >
      <Tab.Screen
        name="Sumario"
        component={PantallaSumario}
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Productos"
        component={PantallaProductos}
        options={{
          title: 'Productos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-grid-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Ventas"
        component={PantallaVentas}
        options={{
          title: 'Ventas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-analytics-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrito"
        component={PantallaCarrito}
        options={{
          title: 'Carrito',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-cart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Salir"
        component={Salir}
        options={{
          title: 'Salir',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-log-in-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
