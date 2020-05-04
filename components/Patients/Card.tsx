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
export class PatientCard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (     
      <Card containerStyle={styles.containerStyle}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center'}}>
          <View style={styles.leftContainer}>
            <Text style={styles.titleStyle}>
              Juan Dela Cruz 
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
    shadowRadius: 3,
    shadowOffset: {width: 2, height: 3}
  },
  leftContainer: {
    width: '70%',
  },
  rightContainer: { 
    alignItems: 'flex-end',
    width: '30%',
  },
  titleStyle: {
    fontFamily: 'Roboto-Regular', 
    fontSize: 20, 
    color: colors.black,
  },
})
