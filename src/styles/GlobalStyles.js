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
  contenedorProductos: {
    flex: 1,
  },
  contenedorProductosRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  contenedorProductosColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  botonCarrito: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 17.1,
    borderBottomColor: '#828282',
    borderBottomWidth: 0.5,
  },
  tittleCartEmpty: {
    padding: 30,
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
  textCartEmpty: {
    marginLeft: '25%',
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    color: '#828282',
    maxWidth: 200,
  },
  addProductContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    gap: 20,
  },
  detailsProductContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  detailsButtonsContainer: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    width: '100%',
  },
  detailsButton: {
    width: 150,
    marginLeft: 10,
  },
  iconOrderComplete: {
    marginVertical: 30,
    textAlign: 'center',
    fontSize: 128,
    color: '#62CEB4',
  },
  orderNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 3,
  },
  orderNumberTittle: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#2C2C2C',
  },
  orderNumber: {
    fontSize: 14,
    fontFamily: 'Inter-Bold',
    color: '#555555',
  },
  cancelOrderButton: {
    flexDirection: 'row',
    marginVertical: 110,
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  secondSummaryContainer: {
    flexDirection: 'row',
    maxWidth: '100%',
    marginBottom: 40,
  },
  cardRowSummary: {
    flex: 1,
  },
  containerSummaryButton: {
    alignItems: 'center',
  },
  contenedorCartTotal: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderBottomColor: '#828282',
    borderBottomWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  textContenedorCartTotal: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
  },
  contenedorItemsCart: {
    flex: 1,
    maxHeight: '70%',
  },
});

export default globalStyles;
