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
import {colors} from '../assets'

import { CustomButton } from '../components/CustomButton';

export interface Props {
  navigation: any;
}

class LoginScreen extends React.Component<IProps, IState> {
  render() {
    return (
      <View style={{ flex: 1 }}> 
        <StatusBar barStyle="dark-content" backgroundColor={colors.ocean1}  />
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.ocean5 }}>
          <View style={styles.logoContainer} >
            <Icon
              raised
              name='tooth'
              size={30}
              type='material-community'
              color={colors.ocean1}
            />
            <Text style={styles.mainText}>Twinkle Teeth</Text>
          </View>
          <View style={styles.flex1}>
            <View style={{ 
              flex: 1,
              justifyContent: 'center',
              marginBottom: 10,
              padding: 5,
              }}
            >
              <Text style={[styles.subText, {alignSelf: 'center', fontSize: 25, marginVertical: 30}]}>Sign In</Text>
              <Input
                placeholder='Email'
                inputStyle={{ 
                  marginHorizontal: 10,
                  color: '#363A44',
                }}
                inputContainerStyle={{
                  borderWidth: 1,
                  borderColor: '#CAD3DF',
                  borderRadius: 5,
                  marginVertical: 10,
                  height: 50
                }}
                leftIcon={
                  <Icon
                    name='email'
                    size={24}
                    color={colors.ocean1}
                  />
                }
              />
              <Input
                placeholder='Password'
                secureTextEntry={true}
                inputStyle={{ 
                  marginHorizontal: 10,
                }}
                inputContainerStyle={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#CAD3DF',
                  marginVertical: 10,
                  height: 50
                }}
                leftIcon={
                  <Icon
                    name='lock'
                    size={24}
                    color={colors.ocean1}
                  />
                }
              />
            <Button
              titleStyle={styles.subText}
              buttonStyle={{
                height: 60,
                borderWidth: 1,
                marginHorizontal: 10,
                marginVertical: 10,
                borderColor: colors.ocean1,
                backgroundColor: colors.ocean1,
              }}
              title="LOGIN"
              onPress={() => this.props.navigation.navigate('LOGIN')}
            />
            </View>
            <View style={{flex: 1, alignItems: 'center'}} >
              <Text style={[styles.text, { color: '#398BED'}]}onPress={() => this.props.navigation.navigate("FORGOT PASSWORD")}>Forgot your password?</Text>   
              <Text style={[styles.text]}>Dont'have an account?
                <Text style={{ color: '#398BED' }} onPress={() => this.props.navigation.navigate("SIGN UP")}> Sign Up</Text> 
              </Text>            
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  } 
};
export default LoginScreen;

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

