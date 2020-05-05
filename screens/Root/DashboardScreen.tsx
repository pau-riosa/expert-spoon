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
      <View style={{ flex: 1, flexDirection: 'column' }}> 
        <StatusBar barStyle="dark-content" backgroundColor={colors.ocean1}  />
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.ocean5 }}> 
          <Text style={{padding: 15}}>Thursday, May 20, 2020</Text> 
          <View style={{ marginHorizontal: 15, marginTop: 15 }}>
            <Text style={{ fontFamily: 'Gill Sans', fontSize: 25 }}>Appointments Today</Text>   
          </View>
          <View style={styles.horizontalContainer}>
            <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
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
        </SafeAreaView>
      </View>
    );
  } 
};
export default DashboardScreen;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  numberText: {
    fontFamily: 'Roboto',
    fontSize: 40,
    color: '#363A44'
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.ocean3,
    borderColor: colors.ocean3,
    shadowColor: colors.ocean1,
    shadowRadius: 5,
    shadowOffset: {width: 5, height: 5}, 
    borderRadius: 5,
    margin: 5,
    padding: 20,
  },
  verticalContainer: {
    borderRadius: 5,
    flexDirection: 'column',
    marginHorizontal: 10,
    flex: 0.4,
    backgroundColor: colors.ocean5,
  },
  horizontalContainer: {
    flex: 1, 
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
    backgroundColor: colors.ocean5,
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
    fontWeight: '400',
    color: '#363A44'
  },
  text: {
    fontFamily: 'Gill Sans', 
    fontSize: 17, 
    marginVertical: 2 
  }
});

