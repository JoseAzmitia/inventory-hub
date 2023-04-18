// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import SumarioCard from '../components/SumarioCard';
import ProductCard from '../components/ProductCard';

function PantallaSumario({ navigation }) {
  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Sumario</Text>
      <SumarioCard title="Ventas" quantity={15} variable="Ingresos" value="3400.00" />
      <SumarioCard
        title="Productos en inventario"
        quantity={250}
        variable="Valor total"
        value="30000.00"
      />
      <View style={globalStyles.contenedorSumario}>
        <Text style={globalStyles.infoSumario}>Producto más vendido</Text>
        <ProductCard
          image="https://img.freepik.com/vector-premium/icono-linea-concepto-producto-ilustracion-elemento-simple-diseno-simbolo-esquema-concepto-producto-puede-utilizar-ui-ux-web-movil_159242-2076.jpg"
          name="Estilizador Gel Para Rizos"
          price={140}
          onPress={() => navigation.navigate('ProductStack')}
        />
      </View>
    </View>
  );
}

export default PantallaSumario;
