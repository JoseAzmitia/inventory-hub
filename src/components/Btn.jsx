import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#62CEB4',
    padding: 20,
    width: '90%',
    borderRadius: 10,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texto: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto-MediumItalic',
  },
});

function BtnApp({ texto, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
      <MaterialIcons name={icon} size={22} color="#fff" />
    </TouchableOpacity>
  );
}

export default BtnApp;
