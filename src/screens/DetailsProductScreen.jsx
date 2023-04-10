// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import DetailsProductCard from '../components/DetailsProductCard';
import BtnApp from '../components/Btn';

function DetailsProductScreen({ navigation }) {
  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Detalles del Producto</Text>
      <View style={globalStyles.detailsProductContainer}>
        <DetailsProductCard
          image="https://static.wixstatic.com/media/3f119d_6c9d9e22c8cb4a0da762c3c15775d2b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
          name="Estilizador Gel Para Rizos"
          price={140}
          stock={10}
        />
        <View style={globalStyles.detailsButtonsContainer}>
          <View style={globalStyles.detailsButton}>
            <BtnApp
              texto="Edit"
              icon="edit"
              newColor
              color="#828282"
              onPress={() => navigation.navigate('EditProductScreen')}
            />
          </View>
          <View style={globalStyles.detailsButton}>
            <BtnApp
              texto="Agregar"
              icon="add-shopping-cart"
              onPress={() => console.log('Producto agregado')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default DetailsProductScreen;
