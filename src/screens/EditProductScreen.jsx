// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import InputWithIcon from '../components/InputWithIcon';
import BtnApp from '../components/Btn';

function EditProductScreen() {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Editar Producto</Text>
      <View style={globalStyles.addProductContainer}>
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
        <InputWithIcon
          title="Ingresa la cantidad"
          placeholder="Stock"
          icon="ios-reader-outline"
          value={stock}
          numeric
          onChangeText={setStock}
        />
        <InputWithIcon
          title="Ingresa la cantidad"
          placeholder="Precio"
          icon="ios-pricetag-outline"
          value={price}
          numeric
          onChangeText={setPrice}
        />
        <BtnApp texto="Guardar" onPress={() => console.log('Producto Agregado')} />
        <BtnApp
          texto="Eliminar"
          newColor
          color="#FF7575"
          onPress={() => console.log('Eliminado')}
        />
      </View>
    </View>
  );
}

export default EditProductScreen;
