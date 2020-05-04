/**
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// Screens
import PatientListScreen from '../screens/Root/Patient/PatientListScreen';
import PatientInfoScreen from '../screens/Root/Patient/PatientInfoScreen';

type NavigatorParams = {
  PATIENT_INFO: undefined;
  PATIENT_MESSAGE: undefined;
  PATIENT_ATTACHMENT: undefined;
};

const TopTab = createMaterialTopTabNavigator<NavigatorParams>();

export default function Patient() {
  return (
    <TopTab.Navigator initialRouteName="PATIENT_INFO">
      <TopTab.Screen
        name="PATIENT_INFO"
        component={PatientInfoScreen}
        options={{ title: 'INFO' }}
      />
      <TopTab.Screen
        name="PATIENT_MESSAGE"
        component={PatientInfoScreen}
        options={{ title: 'MESSAGE' }}
      />
      <TopTab.Screen
        name="PATIENT_ATTACHMENT"
        component={PatientInfoScreen}
        options={{ title: 'ATTACHMENT' }}
      />
    </TopTab.Navigator>
  );
}
