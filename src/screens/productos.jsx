// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import ActionButtons from '../components/ActionButtons';
import ProductCard from '../components/ProductCard';

function PantallaProductos() {
  const products = [
    {
      id: 1,
      name: 'Estilizador Gel Para Rizos',
      price: 140,
      image:
        'https://static.wixstatic.com/media/3f119d_6c9d9e22c8cb4a0da762c3c15775d2b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    },
    {
      id: 2,
      name: 'Estilizador Gel Para Rizos',
      price: 140,
      image:
        'https://static.wixstatic.com/media/3f119d_6c9d9e22c8cb4a0da762c3c15775d2b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    },
    {
      id: 3,
      name: 'Estilizador Gel Para Rizos',
      price: 140,
      image:
        'https://static.wixstatic.com/media/3f119d_6c9d9e22c8cb4a0da762c3c15775d2b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    },
    {
      id: 4,
      name: 'Estilizador Gel Para Rizos',
      price: 140,
      image:
        'https://static.wixstatic.com/media/3f119d_6c9d9e22c8cb4a0da762c3c15775d2b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    },
    {
      id: 5,
      name: 'Estilizador Gel Para Rizos',
      price: 140,
      image:
        'https://static.wixstatic.com/media/3f119d_6c9d9e22c8cb4a0da762c3c15775d2b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    },
    {
      id: 6,
      name: 'Estilizador Gel Para Rizos',
      price: 140,
      image:
        'https://static.wixstatic.com/media/3f119d_6c9d9e22c8cb4a0da762c3c15775d2b3~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg',
    },
  ];

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Productos</Text>
      <ActionButtons
        actionText="Agregar"
        actionIcon="add-circle"
        onPressOrder={() => console.log('Ordenando lista...')}
        onPressAction={() => console.log('Agregando producto...')}
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
                  price={product.price}
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
