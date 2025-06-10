import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

// import Exemplo01 from './src/exemplos/exemplo-01';
// import Exemplo02 from './src/exemplos/exemplo-02';
//import Exemplo03 from './src/exemplos/exemplo-03';
// import Exemplo04 from './src/exemplos/exemplo-04';
//import Exemplo05 from './src/exemplos/exemplo-05';
//import Exemplo06 from './src/exemplos/exemplo-06';

import Rotas from './src/navegacao/routes';


//import Atividade02 from './src/atividades/atividades-02';
//import Atividade03 from './src/atividades/atividades-03';
//import Atividade04 from './src/atividades/atividades-04';
//import Atividade05 from './src/atividades/atividades-05';
//import Atividade06 from './src/atividades/atividades-06';



export default function App() {
  return (
    // 2. Remova a View e renderize apenas o componente de Rotas
    // O NavigationContainer dentro de Rotas já cuida do layout principal.
    <Rotas />
  );
}



//export default function App() {
  //return (
    //<View style={styles.container}>
      //<Atividade06 />
      //<StatusBar style="auto" />
    //</View>
  //);
//}

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: 'darksalmon',
    //padding: 8,
    //marginTop: Constants.statusBarHeight,
  //},
//});
