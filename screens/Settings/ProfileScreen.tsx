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
import { InquiryCard } from '../../components/Inquiries/Card';

export interface IProps {
  navigation: any;
}
export interface IState {}

class ProfileScreen extends React.Component<IProps, IState> {
  render() {
    return (
      <View style={{ flex: 1 }}> 
        <StatusBar barStyle="dark-content" backgroundColor={colors.ocean1}  />
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.ocean5 }}>
          <Text>Profile</Text> 
          <Text>Log Out</Text> 

        </SafeAreaView>
      </View>
    );
  } 
};
export default ProfileScreen;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

