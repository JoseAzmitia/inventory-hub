// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import * as Font from 'expo-font';

import Toast from 'react-native-toast-message';
import { AuthProvider } from './src/context/authContext';
import { CartProvider } from './src/context/cartContext';
import AppNav from './src/navigation/appNav';

const InterRegular = require('./src/assets/fonts/Inter-Regular.ttf');
const InterBold = require('./src/assets/fonts/Inter-Bold.ttf');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  // eslint-disable-next-line react/sort-comp
  async loadFonts() {
    await Font.loadAsync({
      'Inter-Regular': InterRegular,
      'Inter-Bold': InterBold,
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.fontsLoaded) {
      return (
        <AuthProvider>
          <CartProvider>
            <AppNav />
            <Toast />
          </CartProvider>
        </AuthProvider>
      );
    }
    return null;
  }
}
