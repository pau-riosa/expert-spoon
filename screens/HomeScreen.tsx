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

export interface Props {
  navigation: any;
}

class HomeScreen extends React.Component<IProps, IState> {
  render() {
    return (
      <View style={{ flex: 1 }}> 
        <StatusBar barStyle="dark-content" backgroundColor={colors.ocean1}  />
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.ocean1 }}>
          <View style={styles.flex6} >
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
            <Button 
              titleStyle={styles.subText}
              type={'outline'}
              buttonStyle={{
                height: 60,
                borderWidth: 1,
                borderColor: '#363A44' 
              }}
              title="LOGIN"
              onPress={() => this.props.navigation.navigate('LOGIN')}
            />
            <Button
              titleStyle={styles.subText}
              type={'outline'}
              buttonStyle={{
                height: 60,
                borderWidth: 1,
                borderColor: '#363A44' 
              }}
              title="SIGN UP"
              onPress={() => this.props.navigation.navigate('SIGN UP')}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  } 
};

export default HomeScreen;
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
    fontWeight: '500',
    color: '#363A44'
  }
});

