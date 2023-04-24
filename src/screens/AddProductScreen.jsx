// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { AuthContext } from '../context/authContext';
import globalStyles from '../styles/GlobalStyles';
import InputWithIcon from '../components/InputWithIcon';
// import ImagePickerComponent from '../components/ImagePicker';
import BtnApp from '../components/Btn';
import { createProduct } from '../services/productService';
import { ImageTemplate } from '../utils/config';

function AddProductScreen({ navigation }) {
  const { userInfo } = useContext(AuthContext);
  const userId = userInfo.user;
  const image = ImageTemplate;
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSaveProduct = async () => {
    try {
      const product = {
        name: productName,
        category,
        stock,
        price,
        userId,
        image,
      };
      await createProduct(product); // Llamar la función createProduct
      console.log('Producto agregado');
      navigation.navigate('Productos', { updateProductos: Math.random() });
    } catch (error) {
      console.error(error);
      console.log('Función llamada en AddProduct_');
    }
  };

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Nuevo Producto</Text>
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
        {/* <ImagePickerComponent /> */}
        <Modal isVisible={isModalVisible}>
          <View style={globalStyles.modalContainer}>
            <Text style={globalStyles.modalText}>
              ¿Está seguro de que desea agregar este producto?
            </Text>
            <BtnApp
              texto="Sí, agregar producto"
              onPress={() => {
                setIsModalVisible(false);
                handleSaveProduct();
              }}
            />
            <BtnApp
              texto="Cancelar"
              newColor
              color="#FF7575"
              onPress={() => setIsModalVisible(false)}
            />
          </View>
        </Modal>
        <BtnApp texto="Agregar" onPress={() => setIsModalVisible(true)} />
      </View>
    </View>
  );
}

export default AddProductScreen;
