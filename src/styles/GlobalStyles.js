import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  contenedor: {
    flexGrow: 1,
    backgroundColor: '#F8F8F8',
  },
  titleText: {
    marginTop: 25,
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
  infoSumario: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    maxWidth: '30%',
    marginHorizontal: 35,
    marginTop: 50,
  },
  contenedorSumario: {
    marginVertical: 45,
    flexDirection: 'row',
  },
});

export default globalStyles;
