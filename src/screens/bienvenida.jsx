// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Image } from 'react-native';
import BtnApp from '../components/Btn';
import human from '../assets/img/misc/Human.png';

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000000',
    opacity: 0.5,
  },
});

function PantallaBienvenida({ navigation }) {
  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.titulo}>INVENTORY HUB</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={human} />
      </View>
      <BtnApp
        texto="Comenzar"
        icon="arrow-forward-ios"
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
}

export default PantallaBienvenida;
