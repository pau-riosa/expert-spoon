import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export interface Props {
  name: string;
  navigation: any;
  handlePress: () => any;
}

interface State {
  enthusiasmLevel: number;
}

export class CustomButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (     
      <View style={styles.button}>
        <Button
          title="Go To Default Page"
          onPress={this.props.handlePress}
        />
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});
