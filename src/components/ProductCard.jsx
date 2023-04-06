// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function ProductCard({ image, name, price }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.price}>${price}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 45,
    width: 169,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 149,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  name: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginTop: 5,
    color: '#555555',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#2B2B2B',
    marginTop: 5,
  },
});

export default ProductCard;
