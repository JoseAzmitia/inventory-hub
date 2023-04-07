// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ActionButtons({ actionText, actionIcon, onPressOrder, onPressAction }) {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <Text style={styles.text}>Ordenar</Text>
        <TouchableOpacity style={styles.button} onPress={onPressOrder}>
          <Ionicons name="chevron-down" style={styles.firstIcon} />
        </TouchableOpacity>
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
});

export default ActionButtons;
