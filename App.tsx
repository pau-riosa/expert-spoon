import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import DashboardScreen from './screens/Root/DashboardScreen';
import Auth from './routes/Auth';
import Root from './routes/Root';
// colors
import {colors} from './assets'
// navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

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
        <Stack.Screen options={{ 
          headerShown: false 
        }} name="ROOT" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
