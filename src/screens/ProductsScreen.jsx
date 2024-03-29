// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, Image, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import * as Network from 'expo-network';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../styles/GlobalStyles';
import ActionButtons from '../components/ActionButtons';
import ProductCard from '../components/ProductCard';
import { getAllProductsByUser } from '../services/productService';
import { AuthContext } from '../context/authContext';
import nothing from '../assets/img/misc/Nothing.png';
import connection from '../assets/img/misc/Connection.png';

function PantallaProductos({ navigation, route }) {
  const { userInfo } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [orderType, setOrderType] = useState(null);
  const [productsUpdated, setProductsUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [connected, setConnected] = useState(true);
  const userId = userInfo.user;
  const { updateProductos } = route.params ?? {};

  useEffect(() => {
    setProductsUpdated(updateProductos);
  }, [updateProductos]);

  const handleAddProductPress = () => {
    navigation.navigate('Nuevo producto');
  };

  const loadProducts = async () => {
    const networkState = await Network.getNetworkStateAsync();
    if (!networkState.isConnected && !networkState.isInternetReachable) {
      setConnected(false);
      return;
    }
    setConnected(true);
    try {
      const result = await getAllProductsByUser(userId);
      setProducts(result);
      setIsLoading(false);
      console.log('Productos cargados');
    } catch (error) {
      setIsLoading(false);
      setProducts([]);
      console.log('No hay productos en el inventario');
    }
  };

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  if (!connected) {
    return (
      <View style={globalStyles.contenedor}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={connection} style={{ width: 300, height: 270 }} />
          <TouchableOpacity style={{ marginVertical: 45 }} onPress={loadProducts}>
            <MaterialIcons name="refresh" size={36} color="#62CEB4" />
          </TouchableOpacity>
          <Text style={globalStyles.modalTextQuestion}>Necesitas conexión a internet.</Text>
        </View>
      </View>
    );
  }

  if (isLoading && connected) {
    return (
      <View style={globalStyles.contenedor}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#62CEB4" />
        </View>
      </View>
    );
  }

  return (
    <View style={globalStyles.contenedor}>
      <ActionButtons
        actionText="Agregar"
        actionIcon="add-circle"
        handleOrderOptionPress={handleOrderOptionPress}
        onPressAction={handleAddProductPress}
      />
      {products.length === 0 && !isLoading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={nothing} style={{ width: 250, height: 220 }} />
        </View>
      ) : (
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
                      onPress={() => navigation.navigate('Detalles del producto', { product })}
                    />
                  ))}
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default PantallaProductos;
