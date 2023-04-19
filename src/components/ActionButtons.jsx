// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalDropdown from 'react-native-modal-dropdown';

function ActionButtons({ actionText, actionIcon, handleOrderOptionPress, onPressAction }) {
  // eslint-disable-next-line no-unused-vars
  const [orderType, setOrderType] = useState(null);

  const orderOptions = ['Mayor precio', 'Menor precio', 'Nombre (A-Z)', 'Nombre (Z-A)'];

  function convertToValue(option) {
    switch (option) {
      case 'Mayor precio':
        return 'price_desc';
      case 'Menor precio':
        return 'price_asc';
      case 'Nombre (A-Z)':
        return 'name_asc';
      case 'Nombre (Z-A)':
        return 'name_desc';
      default:
        return null; // Opcional: devuelve null si la opción no es válida
    }
  }

  const handleOrderOptionPressLocal = (value) => {
    console.log(orderOptions[value]);
    const newValue = convertToValue(orderOptions[value]);
    setOrderType(orderOptions[value]);
    console.log(`Ordenando lista por ${newValue}`);
    handleOrderOptionPress(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <Text style={styles.text}>Ordenar</Text>
        <ModalDropdown
          style={styles.button}
          options={orderOptions}
          renderRow={(option) => <Text style={styles.dropdownOption}>{option}</Text>}
          onSelect={(value) => handleOrderOptionPressLocal(value)}
          dropdownStyle={styles.dropdown}
        >
          <Ionicons name="chevron-down" style={styles.firstIcon} />
        </ModalDropdown>
      </View>
      <View style={styles.actionContainer}>
        <Text style={styles.text}>{actionText}</Text>
        <TouchableOpacity style={styles.button} onPress={onPressAction}>
          <Ionicons name={actionIcon} style={styles.secondIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: '#828282',
    borderBottomWidth: 0.5,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    marginLeft: 8,
  },
  firstIcon: {
    fontSize: 24,
    color: '#2C2C2C',
  },
  secondIcon: {
    fontSize: 24,
    color: '#62CEB4',
  },
  dropdown: {
    marginLeft: -70,
    marginTop: -25,
    width: 90,
    height: 150,
    zIndex: -1,
  },
  dropdownOption: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
});

export default ActionButtons;
