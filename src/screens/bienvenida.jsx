// eslint-disable-next-line no-unused-vars
import { useCallback, useEffect } from 'react';

import { Text, StyleSheet, SafeAreaView, View, Image } from 'react-native';
import BtnApp from '../components/Btn';
import human from '../assets/img/misc/Human.png';

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  titulo: {
    fontFamily: 'Inter-Bold',
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
        <Image source={human} style={{ width: 250, height: 250 }} />
      </View>
      <View style={{ marginBottom: 50 }}>
        <BtnApp
          texto="Comenzar"
          secondIcon="arrow-forward-ios"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}

export default PantallaBienvenida;
