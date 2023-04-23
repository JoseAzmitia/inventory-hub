import React, { createContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      const storedCartItems = await AsyncStorage.getItem('cartItems');
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    };
    getCartItems();
  }, []);

  useEffect(() => {
    const storeCartItems = async () => {
      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
    };
    storeCartItems();
  }, [cartItems]);

  const removeFromCart = useCallback((product) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== product.id));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const addToCart = useCallback(
    (product) => {
      const existingProduct = cartItems.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.stock > 0 && existingProduct.quantity <= existingProduct.stock) {
          const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
          const updatedCartItems = cartItems.map((item) =>
            item.id === product.id ? updatedProduct : item
          );
          setCartItems(updatedCartItems);
        } else {
          console.log('No se puede agregar más de este producto al carrito.');
        }
      } else {
        setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
      }
    },
    [cartItems]
  );

  const calculateTotal = useCallback(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  const memoizedValue = React.useMemo(
    () => ({ cartItems, addToCart, removeFromCart, clearCart, calculateTotal }),
    [cartItems, addToCart, removeFromCart, clearCart, calculateTotal]
  );

  return <CartContext.Provider value={memoizedValue}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
