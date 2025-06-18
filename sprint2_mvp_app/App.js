import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import Dashboard from './src/screens/Dashboard';
import RotaScreen from './src/screens/RotaScreen';
import { AuthProvider } from './src/context/AuthContext';
import { EntregaProvider } from './src/context/EntregaContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <EntregaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Rota" component={RotaScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </EntregaProvider>
    </AuthProvider>
  );
}