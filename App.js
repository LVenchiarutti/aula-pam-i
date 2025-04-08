import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

// import Exemplo01 from './src/exemplos/exemplo-01';
// import Exemplo02 from './src/exemplos/exemplo-02';
import Exemplo03 from './src/exemplos/exemplo-03';


import Atividade02 from './src/atividades/atividades-02';


export default function App() {
  return (
    <View style={styles.container}>
      <Atividade02 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    padding: 8,
    marginTop: Constants.statusBarHeight,
  },
});
