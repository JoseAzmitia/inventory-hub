// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import globalStyles from '../styles/GlobalStyles';
import { AuthContext } from '../contextt/authContext';
import BtnApp from '../components/Btn';

function Salir({ navigation }) {
  const { logout } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal isVisible={modal}>
        <View style={globalStyles.modalContainer}>
          <Text style={globalStyles.modalText}>¿Confirma cerrar la sesión?</Text>
          <BtnApp
            texto="Sí, cerrar sesión"
            onPress={() => {
              setModal(false);
              logout();
            }}
          />
          <BtnApp
            texto="Cancelar"
            newColor
            color="#FF7575"
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
