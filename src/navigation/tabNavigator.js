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
  const carritoLength = cartItems.reduce((total, item) => total + item.quantity, null);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
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
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        tabBarInactiveTintColor: '#828282',
        tabBarActiveTintColor: '#27AE60',
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Sumario"
        component={PantallaSumario}
        options={{
          title: 'Sumario',
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
          headerShown: false,
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
          headerShown: false,
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
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-log-in-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
