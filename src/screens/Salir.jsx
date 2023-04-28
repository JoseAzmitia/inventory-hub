// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { View, Text, Image } from 'react-native';
import Modal from 'react-native-modal';
import globalStyles from '../styles/GlobalStyles';
import { AuthContext } from '../context/authContext';
import BtnApp from '../components/Btn';
import thank from '../assets/img/misc/Thank.png';

function Salir({ navigation }) {
  const { logout } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal isVisible={modal}>
        <View style={globalStyles.modalContainer}>
          <Image source={thank} style={{ width: 120, height: 90 }} />
          <Text style={globalStyles.modalText}>Vuelve pronto!</Text>
          <Text style={globalStyles.modalTextQuestion}>¿Está seguro que desea cerrar sesión?</Text>
          <BtnApp
            texto="Cerrar sesión"
            onPress={() => {
              setModal(false);
              logout();
            }}
          />
          <BtnApp
            texto="Cancelar"
            newColor
            border
            color="#828282"
            onPress={() => {
              setModal(false);
              navigation.navigate('Sumario');
            }}
          />
        </View>
      </Modal>
      <Text style={globalStyles.modalText}>¿Desea salir de la sesión?</Text>
      <BtnApp
        texto="Salir"
        onPress={() => {
          setModal(true);
        }}
      />
    </View>
  );
}

export default Salir;
