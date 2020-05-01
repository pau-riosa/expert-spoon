/**
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import { Input, Button, Icon } from 'react-native-elements'
import {colors} from '../../assets'

import { CustomButton } from '../../components/CustomButton';

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
           
        </SafeAreaView>
      </View>
    );
  } 
};
export default DashboardScreen;

const styles = StyleSheet.create({
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

