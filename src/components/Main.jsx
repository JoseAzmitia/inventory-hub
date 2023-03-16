import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
});

function Main() {
  return (
    <View style={styles.container}>
      <Text>Inventory Hub</Text>
    </View>
  );
}

export default Main;
