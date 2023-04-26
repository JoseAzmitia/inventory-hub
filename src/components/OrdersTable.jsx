/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BtnApp from './Btn';
import globalStyles from '../styles/GlobalStyles';

function Table({ data }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState([]);

  const openModal = (products) => {
    setModalData(products);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Fecha</Text>
        <Text style={styles.headerCell}>Items</Text>
        <Text style={styles.headerCell}>Total</Text>
        <Text style={styles.headerCell}>Detalles</Text>
      </View>
      <ScrollView>
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{new Date(item.createdAt).toLocaleDateString('es-MX')}</Text>
            <Text style={styles.cell}>{item.items}</Text>
            <Text style={styles.cell}>${item.totalValue.toFixed(2)}</Text>
            <TouchableOpacity style={styles.cell} onPress={() => openModal(item.products)}>
              <Text style={styles.detailsText}>Ver detalles</Text>
              <MaterialIcons name="info-outline" size={16} color="#74c2af" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Modal isVisible={modalVisible}>
        <View style={globalStyles.modalContainer}>
          <Text style={globalStyles.modalText}>Detalles de la orden</Text>
          {modalData.map((product, index) => (
            <ScrollView>
              <Text key={index} style={styles.modalText}>
                {`${product.name} x ${product.quantity} | $${product.price.toFixed(2)}`}
              </Text>
            </ScrollView>
          ))}
          <View style={styles.containerButton}>
            <BtnApp
              texto="Cerrar"
              newColor
              color="#FF7474"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
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
    flexDirection: 'row',
  },
  detailsText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#74c2af',
    flex: 1,
    textAlign: 'center',
  },
  containerButton: {
    marginTop: 15,
  },
});

export default Table;
