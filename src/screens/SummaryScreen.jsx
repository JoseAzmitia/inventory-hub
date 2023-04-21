// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import SumarioCard from '../components/SumarioCard';
import getSummaryByUserId from '../services/summaryService';
import { AuthContext } from '../context/authContext';
import BtnApp from '../components/Btn';

function PantallaSumario() {
  const { userInfo } = useContext(AuthContext);
  const userId = userInfo.user;
  const [summary, setSummary] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Definir la función fetchSummary en el scope global
  const fetchSummary = async () => {
    const fetchedSummary = await getSummaryByUserId(userId);
    console.log('Api llamada en summaryScreen');
    setSummary(fetchedSummary);
  };

  useEffect(() => {
    // Llamar a fetchSummary cada vez que se monte la pantalla
    fetchSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleRefresh = () => {
    setIsRefreshing(true); // deshabilitar el botón

    setTimeout(() => {
      setIsRefreshing(false); // habilitar el botón después de 3 minutos
    }, 180000);
    fetchSummary();
  };

  if (!summary) {
    return (
      <View style={globalStyles.contenedor}>
        <Text style={globalStyles.titleText}>Sumario</Text>
        <Text>Cargando resumen...</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.contenedor}>
      <Text style={globalStyles.titleText}>Sumario</Text>
      <SumarioCard
        title="Ordenes realizadas"
        quantity={summary.totalOrders}
        variable="Ingresos"
        value={summary.totalSales.toFixed(2)}
      />
      <SumarioCard
        title="Stock en inventario"
        quantity={summary.totalStock}
        variable="Valor total"
        value={summary.totalValue.toFixed(2)}
      />
      <View style={globalStyles.secondSummaryContainer}>
        <View style={globalStyles.cardRowSummary}>
          <SumarioCard title="Productos disponibles" quantity={summary.totalProducts} center />
        </View>
        <View style={globalStyles.cardRowSummary}>
          <SumarioCard title="Categorías disponibles" quantity={summary.totalCategories} center />
        </View>
      </View>
      <View style={globalStyles.containerSummaryButton}>
        <BtnApp texto="Actualizar" disabled={isRefreshing} onPress={handleRefresh} />
      </View>
    </View>
  );
}

export default PantallaSumario;
