// eslint-disable-next-line no-unused-vars
import React from 'react';
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
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={numeric ? 'numeric' : 'default'}
        />
      </View>
      <Ionicons name={icon} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '90%',
  },
  title: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    color: '#4F4F4F',
    marginBottom: 3,
  },
  inputContainer: {
    alignItems: 'flex-start',
  },
  input: {
    fontFamily: 'Inter-Regular',
    height: 20,
    width: 250,
    marginBottom: 10,
    color: '#333333',
  },
  icon: {
    fontSize: 24,
    color: '#4F4F4F',
    marginLeft: 10,
  },
});

export default InputWithIcon;
