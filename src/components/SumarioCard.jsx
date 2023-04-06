// eslint-disable-next-line no-unused-vars
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SumarioCard({ title, quantity, variable, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.variable}>{variable}</Text>
        <Text style={styles.value}>${value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#2C2C2C',
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10,
  },
  quantity: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  variable: {
    fontSize: 14,
    color: '#979797',
  },
  value: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
    color: '#20BF86',
  },
});

export default SumarioCard;
