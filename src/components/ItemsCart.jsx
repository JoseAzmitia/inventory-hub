// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ItemsCard({ image, name, price, quantity }) {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.dataColumn}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.dataRow}>
          <Text style={styles.price}>Cantidad: {quantity}</Text>
          <TouchableOpacity style={styles.touchIconQuantity}>
            <Ionicons name="chevron-down" style={styles.quantityIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.touchIcon}
        onPress={() => console.log('Pressed!')}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Ionicons
          name="close"
          style={[styles.closeIcon, { color: pressed ? '#FF7575' : '#F7E8E8' }]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderBottomColor: '#828282',
    borderBottomWidth: 0.5,
    width: '100%',
  },
  image: {
    width: 86,
    height: 85,
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
  dataColumn: {
    flexDirection: 'column',
    gap: 4,
  },
  dataRow: {
    flexDirection: 'row',
  },
  quantityIcon: {
    fontSize: 24,
    color: '#2C2C2C',
  },
  closeIcon: {
    fontSize: 24,
    color: '#F7E8E8',
  },
  touchIcon: {
    marginLeft: 70,
    height: 24,
  },
  touchIconQuantity: {
    marginLeft: 12,
    marginTop: 4,
    height: 24,
    width: 24,
  },
});

export default ItemsCard;
