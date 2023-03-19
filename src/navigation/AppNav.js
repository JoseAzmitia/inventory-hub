// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import TabNavigator from './TabNavigator';

function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>;
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
