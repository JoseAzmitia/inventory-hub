// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function InputWithIcon({
  title,
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  numeric,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={[styles.container, isFocused && styles.containerFocused]}>
      <View style={styles.inputContainer}>
        <Text style={[styles.title, isFocused && styles.focusedTitle]}>{title}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={numeric ? 'numeric' : 'default'}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
      <Ionicons name={icon} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '90%',
  },
  containerFocused: {
    borderColor: '#62CEB4', // Cambiar el color del borde
    borderWidth: 1, // Aumentar el ancho del borde
    paddingVertical: 18,
  },
  title: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: '#4F4F4F',
    marginBottom: 5,
    marginLeft: 5,
  },
  focusedTitle: {
    position: 'absolute',
    top: -31,
    left: 1,
    fontSize: 12,
    color: '#62CEB4',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 5,
    zIndex: 1,
  },
  inputContainer: {
    alignItems: 'flex-start',
  },
  input: {
    fontFamily: 'Inter-Regular',
    height: 20,
    width: 250,
    marginLeft: 5,
    color: '#333333',
  },
  icon: {
    fontSize: 24,
    color: '#4F4F4F',
    marginLeft: 10,
  },
});

export default InputWithIcon;
