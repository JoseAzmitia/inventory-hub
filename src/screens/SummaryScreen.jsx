// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { View, ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import * as Network from 'expo-network';
import Toast from 'react-native-toast-message';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../styles/GlobalStyles';
import SumarioCard from '../components/SumarioCard';
import getSummaryByUserId from '../services/summaryService';
import { AuthContext } from '../context/authContext';
import BtnApp from '../components/Btn';
import connection from '../assets/img/misc/Connection.png';

function PantallaSumario() {
  const { userInfo } = useContext(AuthContext);
  const userId = userInfo.user;
  const [summary, setSummary] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [connected, setConnected] = useState(true);

  // Definir la función fetchSummary en el scope global
  const fetchSummary = async () => {
    const networkState = await Network.getNetworkStateAsync();
    if (!networkState.isConnected && !networkState.isInternetReachable) {
      setConnected(false);
      return;
    }
    setConnected(true);
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
    Toast.show({
      type: 'info',
      text1: 'Botón actualizar deshabilitado',
      text2: 'Se habilitará en 3 minutos',
      visibilityTime: 3000,
      autoHide: true,
      position: 'bottom',
    });
    setTimeout(() => {
      setIsRefreshing(false); // habilitar el botón después de 3 minutos
    }, 180000);
    fetchSummary();
  };

  if (!connected) {
    return (
      <View style={globalStyles.contenedor}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={connection} style={{ width: 300, height: 270 }} />
          <TouchableOpacity style={{ marginVertical: 45 }} onPress={fetchSummary}>
            <MaterialIcons name="refresh" size={36} color="#62CEB4" />
          </TouchableOpacity>
          <Text style={globalStyles.modalTextQuestion}>Necesitas conexión a internet.</Text>
        </View>
      </View>
    );
  }

  if (!summary && connected) {
    return (
      <View style={globalStyles.contenedor}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#62CEB4" />
        </View>
      </View>
    );
  }

  return (
    <View style={globalStyles.contenedor}>
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
