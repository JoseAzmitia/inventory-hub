// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../utils/config';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (email, password) => {
    axios
      .post(`${API_URL}/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        const { token } = response.data;
        const { correo, uid, user } = response.data;
        const info = { correo, uid, user };
        setUserInfo(info);
        setUserToken(token);

        console.log(info);
        AsyncStorage.setItem('userToken', token);
        AsyncStorage.setItem('userInfo', JSON.stringify(info));
      })
      .catch((e) => {
        Toast.show({
          type: 'error',
          text1: 'Credenciales incorrectas',
          visibilityTime: 3000,
          autoHide: true,
          position: 'bottom',
        });
        console.log(`Login error ${e}`);
      });
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('orders');
    AsyncStorage.removeItem('cartItems');
    setIsLoading(false);
    Toast.show({
      type: 'success',
      text1: 'Has salido de tu sesión',
      visibilityTime: 3000,
      autoHide: true,
      position: 'bottom',
    });
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const infoUser = await AsyncStorage.getItem('userInfo');
      const tokenUser = await AsyncStorage.getItem('userToken');

      if (infoUser) {
        setUserToken(tokenUser);
        setUserInfo(JSON.parse(infoUser));
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
}
