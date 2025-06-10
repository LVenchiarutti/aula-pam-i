// src/navegacao/routes/index.js

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas que criamos
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';

// createNativeStackNavigator cria um objeto para a navegação em pilha
const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    // NavigationContainer é o componente que envolve toda a navegação
    <NavigationContainer>
      {/* Stack.Navigator gerencia as telas da pilha */}
      <Stack.Navigator initialRouteName="Home">
        
        {/* Cada Stack.Screen representa uma tela na pilha */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Tela Inicial' }} // Título que aparecerá no cabeçalho
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: 'Meu Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}