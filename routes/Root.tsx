import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements'

// Screens 
import DashboardScreen from '../screens/Root/DashboardScreen';
// colors
import {colors} from '../assets'
// navigation 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const BottomTab = createBottomTabNavigator();
export default function Root() {
  return (
    <BottomTab.Navigator
      initialRouteName="DASHBOARD"
      tabBarOptions={{
        activeTintColor: colors.ocean1,
        inactiveTintColor: colors.primaryGrey,
      }}
    > 
      <BottomTab.Screen 
        name="DASHBOARD" 
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon
              name='home'
              size={size}
              type='feather'
              color={color}
            />
          )
        }}
      />
      <BottomTab.Screen 
        name="MESSAGES" 
        component={DashboardScreen} 
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({color, size}) => (
            <View style={{ width: 24, height: 24, margin: 5 }}>
              <Icon name='mail' size={size} type='feather' color={color} />
              <View
                style={{
                  position: 'absolute',
                  right: -6,
                  top: -3,
                  backgroundColor: colors.primaryBlue,
                  borderRadius: 10,
                  width: 15,
                  height: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
              </View>
            </View>
          )
        }}
      />
      <BottomTab.Screen 
        name="NEW PATIENT"
        headerShown={'false'}
        component={DashboardScreen} 
        options={{
          tabBarButton: ({color, size}) => (
            <Button 
              icon={
                <Icon
                  name="plus"
                  type='font-awesome'
                  size={25}
                  color="white"
                />
              }
              buttonStyle={styles.buttonStyle}
            />
          ) 
        }}
      />
      <BottomTab.Screen 
        name="CALENDAR" 
        component={DashboardScreen}  
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({color, size}) => (
            <Icon
              name='calendar'
              size={size}
              type='feather'
              color={color}
            />
          )
        }}
      />
      <BottomTab.Screen 
        name="SETTINGS" 
        component={DashboardScreen} 
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon
              name='settings'
              size={size}
              type='feather'
              color={color}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  )
};
const styles = StyleSheet.create({
	buttonStyle: {
    height: 90,
    width: 90,
    bottom: 45,
    backgroundColor: colors.primaryBlue,
    borderRadius: 100,
    borderColor: colors.ocean1,
    borderWidth: 5
  }
});
