/**
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements'
import {colors} from '../../assets'

import { AppointmentCard } from '../../components/Appointment/Card';
import { InquiryCard } from '../../components/Inquiries/Card';

export interface IProps {
  navigation: any;
}
export interface IState {}

class DashboardScreen extends React.Component<IProps, IState> {
  render() {
    return (
      <View style={{ flex: 1 }}> 
        <StatusBar barStyle="dark-content" backgroundColor={colors.ocean1}  />
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.ocean5 }}>
          <View style={{ marginHorizontal: 15, marginTop: 15 }}>
            <Text style={{ fontFamily: 'Gill Sans', fontSize: 25 }}>Upcoming Appointments</Text>   
          </View>
          <View style={styles.horizontalContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.scrollViewHorizontalStyle}>
                <AppointmentCard /> 
              </View>
              <View style={styles.scrollViewHorizontalStyle}>
                <AppointmentCard /> 
              </View>
              <View style={styles.scrollViewHorizontalStyle}>
                <AppointmentCard /> 
              </View>
              <View style={styles.scrollViewHorizontalStyle}>
                <AppointmentCard /> 
              </View>
            </ScrollView>
          </View> 
          <View style={{ margin: 15 }}>
            <Text style={{ fontFamily: 'Gill Sans', fontSize: 25 }}>Patient Inquiries</Text>   
          </View>
          <View style={styles.verticalContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.scrollViewVerticalStyle}>
                <InquiryCard /> 
                <InquiryCard /> 
                <InquiryCard /> 
                <InquiryCard /> 
                <InquiryCard /> 
                <InquiryCard /> 
                <InquiryCard /> 
                <InquiryCard /> 
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  } 
};
export default DashboardScreen;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  verticalContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1, 
    backgroundColor: "#e5e5e5",
  },
  horizontalContainer: {
    height: '30%', 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: 'white',
    fontWeight: "bold"
  },
  scrollViewVerticalStyle: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
  scrollViewHorizontalStyle: {
    width: deviceWidth,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  logoContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ocean5
  },
  flex1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    backgroundColor: colors.ocean5
  },
  mainText: {
    fontFamily: 'Gill Sans',
    fontSize: 50,
    fontWeight: '300',
    color: '#363A44'
  },
  subText: {
    marginHorizontal: 10, 
    fontFamily: 'Gill Sans',
    fontSize: 18,
    fontWeight: '500',
    color: '#363A44'
  },
  text: {
    fontFamily: 'Gill Sans', 
    fontSize: 17, 
    marginVertical: 2 
  }
});

