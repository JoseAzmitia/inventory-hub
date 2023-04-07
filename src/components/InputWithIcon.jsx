// eslint-disable-next-line no-unused-vars
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function InputWithIcon({ title, icon, placeholder, value, onChangeText, secureTextEntry }) {
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '90%',
  },
  title: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    marginBottom: 3,
  },
  inputContainer: {
    alignItems: 'flex-start',
  },
  input: {
    height: 20,
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    color: '#ccc',
    marginLeft: 10,
  },
});

export default InputWithIcon;
