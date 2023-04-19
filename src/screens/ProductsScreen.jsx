// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import ActionButtons from '../components/ActionButtons';
import ProductCard from '../components/ProductCard';
import { getAllProductsByUser } from '../services/productService';
import { AuthContext } from '../context/authContext';

function PantallaProductos({ navigation, route }) {
  const { userInfo } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [orderType, setOrderType] = useState(null);
  const [productsUpdated, setProductsUpdated] = useState(false);
  const userId = userInfo.user;
  const { updateProductos } = route.params ?? {};

  useEffect(() => {
    setProductsUpdated(updateProductos);
  }, [updateProductos]);

  const handleAddProductPress = () => {
    navigation.navigate('AddProductScreen');
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await getAllProductsByUser(userId);
        setProducts(result);
        console.log('api llamada');
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, [userId, productsUpdated]);

  const handleOrderOptionPress = (value) => {
    setOrderType(value);
  };

  // Función para ordenar los productos según el tipo de orden seleccionado
  const orderedProducts = () => {
    switch (orderType) {
      case 'price_desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'price_asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'name_asc':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'name_desc':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  };

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Productos</Text>
      <ActionButtons
        actionText="Agregar"
        actionIcon="add-circle"
        handleOrderOptionPress={handleOrderOptionPress}
        onPressAction={handleAddProductPress}
      />
      <ScrollView style={globalStyles.contenedorProductos}>
        <View style={globalStyles.contenedorProductosColumn}>
          {[...Array(Math.ceil(products.length / 2))].map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <View style={globalStyles.contenedorProductosRow} key={index}>
              {orderedProducts()
                .slice(index * 2, index * 2 + 2)
                .map((product) => (
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
