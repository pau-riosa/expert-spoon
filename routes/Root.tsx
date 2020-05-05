/**
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
// Screens
import PatientListScreen from '../screens/Root/PatientListScreen';
import DashboardScreen from '../screens/Root/DashboardScreen';
import AppointmentScreen from '../screens/Root/AppointmentScreen';
import SettingScreen from '../screens/Settings/SettingScreen';
// colors
import {colors} from '../assets';
// navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
type NavigatorParams = {
  APPOINTMENT: undefined;
  NOTIFICATION: undefined;
  SETTINGS: undefined;
  NEW_APPOINTMENT: undefined;
};
const BottomTab = createBottomTabNavigator<NavigatorParams>();
export default function Root() {
  return (
    <BottomTab.Navigator
      initialRouteName="APPOINTMENT"
      tabBarOptions={{
        activeTintColor: colors.ocean1,
        inactiveTintColor: colors.primaryGrey,
      }}>
      <BottomTab.Screen
        name="APPOINTMENT"
        component={AppointmentScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="calendar" size={size} type="feather" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="NOTIFICATION"
        component={AppointmentScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" size={size} type="feather" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SETTINGS"
        component={SettingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="settings"
              size={size}
              type="material-community-icons"
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="NEW_APPOINTMENT"
        component={DashboardScreen}
        options={{
          tabBarButton: () => (
            <Button
              icon={
                <Icon
                  name="apps"
                  type="material-community-icons"
                  size={25}
                  color="white"
                />
              }
              buttonStyle={styles.buttonStyle}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    width: 24,
    height: 24,
    margin: 5,
  },
  notificationStyle: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: colors.primaryBlue,
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    height: 56,
    width: 56,
    bottom: 30,
    marginRight: 20,
    marginLeft: 140,
    borderRadius: 100,
    borderWidth: 5,
    backgroundColor: colors.ocean1,
    borderColor: colors.ocean1,
    shadowColor: colors.ocean1,
    shadowOpacity: 1,
    shadowRadius: 7,
    shadowOffset: {width: 0, height: 5},
  },
});
