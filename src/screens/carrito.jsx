// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
});

function PantallaCarrito() {
  return (
    <View style={styles.container}>
      <Text>Carrito</Text>
    </View>
  );
}

export default PantallaCarrito;
