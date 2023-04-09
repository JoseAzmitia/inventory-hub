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
    fontFamily: 'Inter-Regular',
    color: '#F2F2F2',
    fontSize: 18,
    textAlign: 'center',
  },
});

function BtnApp({ texto, icon, secondIcon, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      {icon && <MaterialIcons name={icon} size={24} color="#F2F2F2" />}
      <Text style={styles.texto}>{texto}</Text>
      {secondIcon && <MaterialIcons name={secondIcon} size={24} color="#F2F2F2" />}
    </TouchableOpacity>
  );
}

export default BtnApp;
