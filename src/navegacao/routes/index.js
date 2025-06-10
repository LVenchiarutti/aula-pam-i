// src/navegacao/routes/index.js

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importando as telas
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';
import Condominio from '../screens/Condominio'; // 1. Importe a nova tela

const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ title: 'Tela Inicial' }} 
        />
        <Drawer.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: 'Meu Perfil' }}
        />
        {/* 2. Adicione a tela Condomínio ao navegador */}
        <Drawer.Screen
          name="Condominio"
          component={Condominio}
          options={{ title: 'Meu Condomínio' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}