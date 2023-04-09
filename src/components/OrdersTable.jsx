// eslint-disable-next-line no-unused-vars
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function Table({ data }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Id</Text>
        <Text style={styles.headerCell}>Fecha</Text>
        <Text style={styles.headerCell}>Items</Text>
        <Text style={styles.headerCell}>Total</Text>
      </View>
      {data.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{item.id}</Text>
          <Text style={styles.cell}>{item.fecha}</Text>
          <Text style={styles.cell}>{item.items}</Text>
          <Text style={styles.cell}>${item.total}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#DADADA',
    paddingBottom: 15,
    paddingTop: 15,
  },
  headerCell: {
    fontFamily: 'Inter-Regular',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#2C2C2C',
    flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#DADADA',
  },
  cell: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#2C2C2C',
    flex: 1,
    textAlign: 'center',
  },
});

export default Table;
