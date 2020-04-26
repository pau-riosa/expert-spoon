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
import { Button, Icon } from 'react-native-elements'
import {colors} from '../assets'

import { CustomButton } from '../components/CustomButton';

export default function HomeScreen({navigation}) {
  return (
    <> 
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.flex6} >
          <Icon
            raised
            name='heartbeat'
            type='font-awesome'
            color='#f50'
            />
          <Text style={styles.mainText}>Twinkle Teeth</Text>
        </View>
        <View style={styles.flex1}>
          <Button
            icon={
              <Icon
                name='heartbeat'
                type='font-awesome'
                color='#363A44'
              />
            }
            titleStyle={styles.subText}
            type={'outline'}
            buttonStyle={{
              height: 60,
              borderWidth: 1,
              borderColor: '#363A44' 
            }}
            title="Login"
          />
          <Button
            icon={
              <Icon
                name='heartbeat'
                type='font-awesome'
                color='#363A44'
              />
            }
            titleStyle={styles.subText}
            type={'outline'}
            buttonStyle={{
              height: 60,
              borderWidth: 1,
              borderColor: '#363A44' 
            }}
            title="Sign up"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flex6: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ocean1
  },
  flex1: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    backgroundColor: colors.ocean1
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
  }
});

