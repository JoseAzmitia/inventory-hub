// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import ActionButtons from '../components/ActionButtons';
import ProductCard from '../components/ProductCard';
import { getAllProductsByUser } from '../services/productService';
import { AuthContext } from '../context/authContext';

function PantallaProductos({ navigation }) {
  const { userInfo } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const userId = userInfo.user;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await getAllProductsByUser(userId); // <-- debes reemplazar `userId` con el id del usuario actual
        setProducts(result);
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  });

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Productos</Text>
      <ActionButtons
        actionText="Agregar"
        actionIcon="add-circle"
        onPressOrder={() => console.log('Ordenando lista...')}
        onPressAction={() => navigation.navigate('AddProductScreen')}
      />
      <ScrollView style={globalStyles.contenedorProductos}>
        <View style={globalStyles.contenedorProductosColumn}>
          {[...Array(Math.ceil(products.length / 2))].map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <View style={globalStyles.contenedorProductosRow} key={index}>
              {products.slice(index * 2, index * 2 + 2).map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price.toFixed(2)}
                  onPress={() => navigation.navigate('DetailsProductScreen', { product })}
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default PantallaProductos;
