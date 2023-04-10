// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function DetailsProductCard({ image, name, price, stock }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>Precio</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detail}>Stock</Text>
        <Text style={styles.price}>{stock}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 80,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    width: 320,
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
    width: 300,
    height: 245,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    marginTop: 5,
    marginBottom: 10,
    color: '#2B2B2B',
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#2B2B2B',
    marginTop: 5,
  },
  detail: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: '#828282',
    marginTop: 5,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 45,
  },
});

export default DetailsProductCard;
