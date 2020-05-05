/**
 * @format
 */
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// Screens
import AppointmentMessageScreen from '../screens/Root/Appointments/AppointmentMessageScreen';
import AppointmentInfoScreen from '../screens/Root/Appointments/AppointmentInfoScreen';
import AppointmentAttachmentScreen from '../screens/Root/Appointments/AppointmentAttachmentScreen';

type NavigatorParams = {
  APPOINTMENT_INFO: undefined;
  APPOINTMENT_MESSAGE: undefined;
  APPOINTMENT_ATTACHMENT: undefined;
};

const TopTab = createMaterialTopTabNavigator<NavigatorParams>();

export default function Appointment() {
  return (
    <TopTab.Navigator initialRouteName="APPOINTMENT_INFO">
      <TopTab.Screen
        name="APPOINTMENT_INFO"
        component={AppointmentInfoScreen}
        options={{ title: 'INFO' }}
      />
      <TopTab.Screen
        name="APPOINTMENT_MESSAGE"
        component={AppointmentMessageScreen}
        options={{ title: 'MESSAGE' }}
      />
      <TopTab.Screen
        name="APPOINTMENT_ATTACHMENT"
        component={AppointmentAttachmentScreen}
        options={{ title: 'ATTACHMENT' }}
      />
    </TopTab.Navigator>
  );
}
