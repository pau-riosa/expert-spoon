/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import {colors} from '../../assets';

export interface IProps {}

interface IState {}
export class InquiryCard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (     
      <Card containerStyle={styles.containerStyle}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View style={styles.leftContainer}>
            <Text style={{marginBottom: 10, fontFamily: 'Roboto', fontSize: 10, color: colors.black}}>
              TOOTH EXTRACTION 
            </Text>
            <Text style={{marginBottom: 10, fontFamily: 'Roboto-Regular', fontSize: 20, color: colors.black}}>
              Juan Dela Cruz 
            </Text>
            <Text style={{marginBottom: 10, fontFamily: 'Roboto', fontSize: 14, color: colors.black}}>
              message 
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100}}
              source={{ uri: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' }}
            />
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FAFAFA',
    shadowColor: '#CDCDCD',
    shadowRadius: 5,
    shadowOffset: {width: 2, height: 2}
  },
  leftContainer: {
    padding: 1, 
    width: '70%',
  },
  rightContainer: { 
    padding: 1,
    alignItems: 'flex-end',
    width: '30%',
  },
  rowDirection: {
    flexDirection: 'row',
  },
  titleStyle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: colors.ocean1,
  },
  buttonStyle: {
    borderWidth: 0, 
  },
})
