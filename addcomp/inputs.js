import React, {Component} from 'react';
import {View, StyleSheet, Input} from 'react-native';


class Inputs extends Component {
  state = {isFocused: false};

  onFocusChange = () => {
    this.setState({isFocused: true});
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {borderColor: this.state.isFocused ? '#0779ef' : '#eee'},
        ]}>
        <Input
          placeholder={this.props.name}
          onFocus={this.onFocusChange}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          secureTextEntry={this.props.pass}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '19%',
    height: 50,
    borderRadius: 100,
    marginVertical: 10,
    borderWidth: 3.5,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  inputText: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Inputs;
