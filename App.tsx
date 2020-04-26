import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

import {colors} from './assets'

const Stack = createStackNavigator();

function Auth() {
  return (
    <Stack.Navigator
      initialRouteName="HOME"
    > 
      <Stack.Screen options={{ 
        headerShown: false 
        }} name="HOME" component={HomeScreen} />
      <Stack.Screen options={{ 
        headerShown: true,
        headerTitle: '',
        headerStyle: { backgroundColor: colors.ocean5 },
        }} name="LOGIN" component={LoginScreen} />
      <Stack.Screen options={{ 
        headerShown: true,
        headerTitle: '',
        headerStyle: { backgroundColor: colors.ocean5 },
        }} name="SIGN UP" component={SignUpScreen} />
      <Stack.Screen options={{ 
        headerShown: true,
        headerTitle: '',
        headerStyle: { backgroundColor: colors.ocean5 },
        }} name="FORGOT PASSWORD" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  )
};

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.ocean1 }} />
      <Stack.Navigator
        initialRouteName="HOME"
        screenOptions={{
          headerStyle: { backgroundColor: colors.ocean1 },
        }}
      > 
        <Stack.Screen options={{ 
          headerShown: false 
        }} name="AUTH" component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
