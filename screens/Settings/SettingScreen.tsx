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

class SettingScreen extends React.Component<IProps, IState> {
  render() {
    return (
      <View style={{ flex: 1 }}> 
        <StatusBar barStyle="dark-content" backgroundColor={colors.ocean1}  />
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.ocean5 }}>
          <View style={styles.container}> 
            <View style={styles.avatarContainer}>
              <Image
                style={{ width: 150, height: 150, borderRadius: 100}}
                source={{ uri: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' }}
              />
              <Text style={styles.avatarText}>Juan Dela Cruz</Text> 
            </View>
            <View style={styles.textContainer}>
              <Icon name="user" type="feather" /> 
              <Text style={styles.mainText}>Profile</Text> 
            </View>
            <View style={styles.textContainer}>
              <Icon name="power" type="feather" iconStyle={styles.logOutText} /> 
              <Text style={[styles.mainText, styles.logOutText]}>Log Out</Text> 
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  } 
};
export default SettingScreen;
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatarText: {
    fontFamily: 'Gill Sans',
    fontSize: 25,
  },
  mainText: {
    paddingLeft: 10,
    fontFamily: 'Gill Sans',
    fontSize: 18,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#CDCDCD'
  },
  logOutText: {
    color: colors.ocean1, 
  },
});

