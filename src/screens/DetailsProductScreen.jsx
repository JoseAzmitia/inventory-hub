// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import DetailsProductCard from '../components/DetailsProductCard';
import BtnApp from '../components/Btn';
import { CartContext } from '../context/cartContext';

function DetailsProductScreen({ route, navigation }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => {
    addToCart(product);
    navigation.navigate('Carrito');
  };

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Detalles del Producto</Text>
      <View style={globalStyles.detailsProductContainer}>
        <DetailsProductCard
          image={product.image}
          name={product.name}
          price={product.price}
          stock={product.stock}
        />
        <View style={globalStyles.detailsButtonsContainer}>
          <View style={globalStyles.detailsButton}>
            <BtnApp
              texto="Editar"
              icon="edit"
              newColor
              color="#828282"
              onPress={() => navigation.navigate('EditProductScreen', { product })}
            />
          </View>
          <View style={globalStyles.detailsButton}>
            <BtnApp texto="Agregar" icon="add-shopping-cart" onPress={handleAdd} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default DetailsProductScreen;
