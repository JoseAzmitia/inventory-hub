/* eslint-disable react/no-unstable-nested-components */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/cartContext';

// pantallas
import PantallaSumario from '../screens/SummaryScreen';
import ProductStack from './productStack';
import CartStack from './cartStack';
import PantallaVentas from '../screens/SalesScreen';
import Salir from '../screens/Salir';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const { cartItems } = useContext(CartContext);
  const carritoLength = cartItems.length > 0 ? cartItems.length : null;
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
        name="ProductStack"
        component={ProductStack}
        options={{
          title: 'ProductStack',
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
        component={CartStack}
        options={{
          title: 'Carrito',
          tabBarBadge: carritoLength,
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
