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
          <View style={{ margin: 10}}>
            <Text>Upcoming Appointments</Text>   
          </View>
          <View style={styles.horizontalContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.scrollViewStyle}>
                <AppointmentCard /> 
              </View>
              <View style={styles.scrollViewStyle}>
                <AppointmentCard /> 
              </View>
              <View style={styles.scrollViewStyle}>
                <AppointmentCard /> 
              </View>

              <View style={styles.scrollViewStyle}>
                <AppointmentCard /> 
              </View>
            </ScrollView>
          </View> 
          <View style={{ margin: 10 }}>
            <Text>Inquiries</Text>   
          </View>
          <View style={styles.verticalContainer}>
            <ScrollView showsHorizontalScrollIndicator={false}>
              <View style={styles.scrollViewStyle}>
                <AppointmentCard /> 
              </View>
              <View style={styles.scrollViewStyle}>
                <AppointmentCard /> 
              </View>
              <View style={styles.scrollViewStyle}>
                <AppointmentCard /> 
              </View>
              <View style={styles.scrollViewStyle}>
                <AppointmentCard /> 
              </View>
              <View style={styles.scrollViewStyle}>
                <AppointmentCard /> 
              </View>
              <View style={styles.scrollViewStyle}>
                <AppointmentCard /> 
              </View>
            </ScrollView>
          </View>

        </SafeAreaView>
      </View>
    );
  } 
};
export default DashboardScreen;
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  verticalContainer: {
    justifyContent: "center",
    alignItems: "center",
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
  scrollViewStyle: {
    width: deviceWidth,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  logoContainer: {
    flex: .2,
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

