// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import { AuthContext } from '../contextt/authContext';
import TabNavigator from './tabNavigator';

function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#62CEB4" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
