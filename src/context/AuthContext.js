// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setUserToken('edison1');
    setIsLoading(false);
  };

  const logout = () => {
    setUserToken(null);
    setIsLoading(false);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
}
