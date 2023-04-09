// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import InputWithIcon from '../components/InputWithIcon';

function AddProductScreen() {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Nuevo Producto</Text>
      <InputWithIcon
        title="Ingresa el nombre"
        placeholder="Nombre del producto"
        icon="ios-information-outline"
        value={productName}
        onChangeText={setProductName}
      />
      <InputWithIcon
        title="Ingresa la categoría"
        placeholder="Categoría"
        icon="ios-grid-outline"
        value={category}
        onChangeText={setCategory}
      />
    </View>
  );
}

export default AddProductScreen;
