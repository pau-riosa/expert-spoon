
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

function defaultScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 50}}>I LOVE YOU</Text>
      <Text style={{ fontSize: 50}}>NINA SABRA</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerTitle: ''}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerTitle: ''}} name="Default" component={defaultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
