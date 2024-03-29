// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';
import * as Network from 'expo-network';
import Toast from 'react-native-toast-message';
import Modal from 'react-native-modal';
import { AuthContext } from '../context/authContext';
import globalStyles from '../styles/GlobalStyles';
import InputWithIcon from '../components/InputWithIcon';
// import ImagePickerComponent from '../components/ImagePicker';
import BtnApp from '../components/Btn';
import { createProduct } from '../services/productService';
import { ImageTemplate } from '../utils/config';

function AddProductScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, [navigation]);

  const { userInfo } = useContext(AuthContext);
  const userId = userInfo.user;
  const image = ImageTemplate;
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const checkConnectivity = async () => {
    const networkState = await Network.getNetworkStateAsync();
    if (!networkState.isConnected && !networkState.isInternetReachable) {
      // Mostrar mensaje de alerta
      Toast.show({
        type: 'info',
        text1: 'Conexión no detectada',
        text2: 'Conéctate a internet para realizar esta acción',
        visibilityTime: 3000,
        autoHide: true,
        position: 'bottom',
      });
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
  };

  const handleSaveProduct = async () => {
    const isConnected = await checkConnectivity();
    if (!isConnected) {
      return;
    }
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

  const handleInputStock = (text) => {
    // Comprobar que solo se ingresen números enteros
    if (/^\d*$/.test(text)) {
      setStock(text);
    }
  };

  const handleInputPrice = (text) => {
    const regex = /^[0-9]+(\.[0-9]{0,2})?$/;
    if (text === '' || regex.test(text)) {
      setPrice(text);
    }
  };

  return (
    <View style={globalStyles.contenedor}>
      <View style={globalStyles.addProductContainer}>
        <InputWithIcon
          title="Ingresa el nombre"
          placeholder="Nombre del producto"
          icon="ios-information-outline"
          value={productName}
          maxLength={40}
          onChangeText={setProductName}
        />
        <InputWithIcon
          title="Ingresa la categoría"
          placeholder="Categoría"
          icon="ios-grid-outline"
          value={category}
          maxLength={19}
          onChangeText={setCategory}
        />
        <InputWithIcon
          title="Ingresa el stock"
          placeholder="Stock"
          icon="ios-reader-outline"
          value={stock}
          maxLength={6}
          numeric
          onChangeText={handleInputStock}
        />
        <InputWithIcon
          title="Ingresa el precio"
          placeholder="Precio"
          icon="ios-pricetag-outline"
          value={price}
          maxLength={9}
          numeric
          onChangeText={handleInputPrice}
        />
        {/* <ImagePickerComponent /> */}
        <Modal isVisible={isModalVisible}>
          <View style={globalStyles.modalContainer}>
            <Text style={globalStyles.modalText}>
              ¿Está seguro de que desea agregar este producto?
            </Text>
            <BtnApp
              texto="Agregar producto"
              onPress={() => {
                setIsModalVisible(false);
                handleSaveProduct();
              }}
            />
            <BtnApp
              texto="Cancelar"
              newColor
              border
              color="#828282"
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
