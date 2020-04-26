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
import DatePicker from 'react-native-datepicker';
import { 
  CheckBox, 
  Input, 
  Button, 
  Icon 
} from 'react-native-elements'
import {colors} from '../assets'

import { CustomButton } from '../components/CustomButton';

export interface Props {
  navigation: any;
}

class SignUpScreen extends React.Component<IProps, IState> {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}> 
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
          <View style={{flex: 1}}>
            <Text style={[styles.subText, {alignSelf: 'center', fontSize: 25, marginVertical: 30}]}>Sign Up</Text>
          </View>
          <View style={styles.flex6}>
              <Input
                placeholder='First name'
                inputStyle={{ 
                  fontFamily: 'Gill Sans',
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
              />
              <Input
                placeholder='Surname'
                inputStyle={{ 
                  fontFamily: 'Gill Sans',
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
              />
              <DatePicker
                style={{
                  width: '100%',
                  paddingHorizontal: 10,
                  marginVertical: 10,
                  alignSelf: 'center'
                }}
                showIcon={false}
                mode="date"
                placeholder="Date of birth"
                format="YYYY-MM-DD"
                minDate="0000-05-01"
                maxDate="2030-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                iconComponent={
                  <Icon
                    name='calendar'
                    type='feather'
                    size={24}
                    color={colors.ocean1}
                  />
                }
                customStyles={{
                  placeholderText: {
                    fontFamily: 'Gill Sans',
                    fontSize: 18,
                    paddingHorizontal: 10,
                    alignSelf: 'flex-start'
                  },
                  dateInput: {
                    fontFamily: 'Gill Sans',
                    fontSize: 100,
                    borderWidth: 1,
                    borderColor: '#CAD3DF',
                    height: 50,
                    borderRadius: 5
                 }
                }}
              />
              <Input
                placeholder='Email'
                inputStyle={{ 
                  fontFamily: 'Gill Sans',
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
              />
              <Input
                placeholder='Password'
                secureTextEntry={true}
                inputStyle={{ 
                  fontFamily: 'Gill Sans',
                  marginHorizontal: 10,
                  color: '#363A44',
                }}
                inputContainerStyle={{
                  borderWidth: 1,
                  borderColor: '#CAD3DF',
                  borderRadius: 5,
                  marginVertical: 10,
                  paddingRight: 10,
                  height: 50
                }}
                rightIcon={
                  <Icon
                    name='eye'
                    type='font-awesome'
                    size={24}
                    color={colors.ocean1}
                  />
                }
              />
              <Input
                placeholder='Password Confirmation' 
                secureTextEntry={true}
                inputStyle={{ 
                  fontFamily: 'Gill Sans',
                  marginHorizontal: 10,
                  color: '#363A44',
                }}
                inputContainerStyle={{
                  borderWidth: 1,
                  borderColor: '#CAD3DF',
                  borderRadius: 5,
                  marginVertical: 10,
                  paddingRight: 10,
                  height: 50
                }}
                rightIcon={
                  <Icon
                    name='eye'
                    type='font-awesome'
                    size={24}
                    color={colors.ocean1}
                  />
                }
              /> 
              <CheckBox
                title='I have read the User Agreement'
                checked={true}
                fontFamily='Gill Sans'
                containerStyle={{
                  backgroundColor: '#ffffff',
                  borderColor: '#ffffff'
                }}
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
              title="SIGN UP"
              onPress={() => this.props.navigation.navigate('SIGN UP')}
            />
          </View>
          <View style={{ flex: 1 }}/> 
        </SafeAreaView>
      </View>
    );
  } 
};
export default SignUpScreen;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ocean5
  },
  flex6: {
    flex: 5,
    flexDirection: 'column',
    marginHorizontal: 15,
    marginVertical: 30,
    backgroundColor: colors.ocean5
  },
  mainText: {
    fontFamily: 'Gill Sans',
    fontSize: 50,
    fontWeight: '300',
    color: '#363A44'
  },
  subText: {
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

