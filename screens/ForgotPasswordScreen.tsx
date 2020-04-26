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

class ForgotPasswordScreen extends React.Component<IProps, IState> {
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
            <Text style={[styles.subText, {alignSelf: 'center', fontSize: 25, marginVertical: 30}]}>Reset Password</Text>
            <Input
              placeholder='Email'
              inputStyle={{ 
                fontFamily: 'Gill Sans',
                marginHorizontal: 10
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
              title="RESET PASSWORD"
              onPress={() => this.props.navigation.navigate('FORGOT PASSWORD')}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  } 
};
export default ForgotPasswordScreen;

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

