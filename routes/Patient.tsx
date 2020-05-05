/**
 * @format
 */
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// Screens
import PatientListScreen from '../screens/Root/PatientListScreen';

type NavigatorParams = {
  APPOINTMENT_INFO: undefined;
  APPOINTMENT_MESSAGE: undefined;
  APPOINTMENT_ATTACHMENT: undefined;
};

const TopTab = createMaterialTopTabNavigator<NavigatorParams>();

export default function Patient() {
  return (
    <TopTab.Navigator initialRouteName="APPOINTMENT_INFO">
      <TopTab.Screen
        name="APPOINTMENT_INFO"
        component={PatientListScreen}
        options={{ title: 'INFO' }}
      />
      <TopTab.Screen
        name="APPOINTMENT_MESSAGE"
        component={PatientListScreen}
        options={{ title: 'MESSAGE' }}
      />
      <TopTab.Screen
        name="APPOINTMENT_ATTACHMENT"
        component={PatientListScreen}
        options={{ title: 'ATTACHMENT' }}
      />
    </TopTab.Navigator>
  );
}
