import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterPage from './register-page';
import RegisterSuccess from './register-success';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="註冊">
      <Stack.Navigator>
        <Stack.Screen name="註冊" 
          component={RegisterPage} />
        <Stack.Screen name="使用者資訊" 
          component={RegisterSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}