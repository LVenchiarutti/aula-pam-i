import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

import Exemplo01 from './src/exemplos/exemplo-01';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo01/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 8,
    marginTop: Constants.statusBarHeight,
  },
});
