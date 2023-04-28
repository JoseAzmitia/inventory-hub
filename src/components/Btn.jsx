import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  texto: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

function BtnApp({ texto, icon, secondIcon, onPress, color, newColor, disabled, border }) {
  const backgroundColor = newColor ? color : '#62CEB4';
  const disabledBackgroundColor = disabled ? '#A9A9A9' : backgroundColor;
  const textColor = border ? color : '#F2F2F2';
  const bgColor = border ? '#FFFFFF' : disabledBackgroundColor;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.btn,
        {
          backgroundColor: bgColor,
          borderColor: disabled ? disabledBackgroundColor : backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      {icon && <MaterialIcons name={icon} size={24} color="#F2F2F2" />}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={[styles.texto, { color: textColor }]}>{texto}</Text>
      </View>
      {secondIcon && <MaterialIcons name={secondIcon} size={24} color="#F2F2F2" />}
    </TouchableOpacity>
  );
}

export default BtnApp;
