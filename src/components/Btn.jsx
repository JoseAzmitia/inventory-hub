import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#62CEB4',
    padding: 15,
    width: '90%',
    borderRadius: 10,
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

function BtnApp({ texto, icon, secondIcon, onPress, color, newColor }) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: newColor ? color : '#62CEB4' }]}
      onPress={onPress}
    >
      {icon && <MaterialIcons name={icon} size={24} color="#F2F2F2" />}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.texto}>{texto}</Text>
      </View>
      {secondIcon && <MaterialIcons name={secondIcon} size={24} color="#F2F2F2" />}
    </TouchableOpacity>
  );
}

export default BtnApp;
