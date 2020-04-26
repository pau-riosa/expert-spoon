/**
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { CustomButton } from '../components/CustomButton';
import Colors from '../assets/colors'

export default function LoginScreen({navigation}) {
  return (
     <> 
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <Text>Text</Text> 
        </ScrollView>
      </SafeAreaView>
    </>

  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.primary
  },
});

