/**
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {login} from './styles';
import {colors} from '../../assets';
export interface IProps {
  navigation: any;
}

export interface IState {}

class HomeScreen extends React.Component<IProps, IState> {
  render() {
    return (
      <View style={login.flex1Container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.ocean1} />
        <SafeAreaView style={login.safeAreaView}>
          <View style={login.flex6}>
            <Icon
              raised
              name="tooth"
              size={30}
              type="material-community"
              color={colors.ocean1}
            />
            <Text style={login.mainText}>Twinkle Teeth</Text>
          </View>
          <View style={login.flex1}>
            <Button
              titleStyle={login.subText}
              type={'outline'}
              buttonStyle={login.loginButton}
              title="Login"
              onPress={() => this.props.navigation.navigate('LOGIN')}
            />
            <Button
              titleStyle={login.subText}
              type={'outline'}
              buttonStyle={login.signUpButton}
              title="Sign up"
              onPress={() => this.props.navigation.navigate('SIGN UP')}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default HomeScreen;
