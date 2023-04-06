import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
  },
  titleText: {
    marginTop: 23,
    padding: 10,
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    color: '#828282',
    textAlign: 'center',
    borderBottomColor: '#828282',
    borderBottomWidth: 0.5,
  },
  subtitleText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
});

export default globalStyles;
