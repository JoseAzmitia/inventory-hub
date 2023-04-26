// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import globalStyles from '../styles/GlobalStyles';
import InputWithIcon from '../components/InputWithIcon';
import BtnApp from '../components/Btn';
import { deleteProduct, updateProduct } from '../services/productService';
import { CartContext } from '../context/cartContext';

function EditProductScreen({ navigation, route }) {
  const { product } = route.params;
  const [productName, setProductName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [stock, setStock] = useState(product.stock);
  const [price, setPrice] = useState(product.price);
  const { removeFromCart } = useContext(CartContext);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteProduct(product.id);
      removeFromCart(product);
      console.log('producto eliminado');
      navigation.navigate('Productos', { updateProductos: Math.random() });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    try {
      const updatedProduct = {
        name: productName,
        category,
        stock,
        price,
      };
      await updateProduct(product.id, updatedProduct);
      removeFromCart(product);
      console.log('Producto editado');
      navigation.navigate('Productos', { updateProductos: Math.random() });
    } catch (error) {
      console.error(error);
    }
  };

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
          title="Ingresa el stock"
          placeholder="Stock"
          icon="ios-reader-outline"
          value={stock.toString()}
          numeric
          onChangeText={setStock}
        />
        <InputWithIcon
          title="Ingresa el precio"
          placeholder="Precio"
          icon="ios-pricetag-outline"
          value={price.toString()}
          numeric
          onChangeText={setPrice}
        />
        <Modal isVisible={modalEdit}>
          <View style={globalStyles.modalContainer}>
            <Text style={globalStyles.modalText}>¿Confirma editar este producto?</Text>
            <BtnApp
              texto="Sí, editar producto"
              onPress={() => {
                setModalEdit(false);
                handleSave();
              }}
            />
            <BtnApp texto="Cancelar" newColor color="#FF7575" onPress={() => setModalEdit(false)} />
          </View>
        </Modal>
        <Modal isVisible={modalDelete}>
          <View style={globalStyles.modalContainer}>
            <Text style={globalStyles.modalText}>¿Confirma eliminar este producto?</Text>
            <BtnApp
              texto="Sí, eliminar producto"
              onPress={() => {
                setModalDelete(false);
                handleDelete();
              }}
            />
            <BtnApp
              texto="Cancelar"
              newColor
              color="#FF7575"
              onPress={() => setModalDelete(false)}
            />
          </View>
        </Modal>
        <BtnApp texto="Guardar" onPress={() => setModalEdit(true)} />
        <BtnApp texto="Eliminar" newColor color="#FF7575" onPress={() => setModalDelete(true)} />
      </View>
    </View>
  );
}

export default EditProductScreen;
