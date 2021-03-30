// Login.js
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Link,
  Image,
  ScrollView,
} from 'react-native';

export default class Login extends React.Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogin = () => {
    // TODO: Firebase stuff...
    console.log('handleLogin');
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/logo-1.png')}
            style={styles.image}
          />
          <Text style={styles.textHeading}>Welcome Back!</Text>
          {this.state.errorMessage && (
            <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
          )}
          <Text style={styles.text}>Email/Username:</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <Text style={styles.text}>Password:</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <View style={{alignSelf: 'flex-end'}}>
            <Text
              style={styles.textf}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              Forgot Password?
            </Text>
          </View>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('userHome')}//this.handleLogin
            style={{width: '45%'}}
          />
          <View style={styles.footer}>
            <Text style={{color: 'white'}}>Don't Have an account?</Text>
            <Text
              onPress={() => this.props.navigation.navigate('SignUp')}
              style={{color: 'green'}}>
              {' '}
              Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textInput: {
    height: 45,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 18,
    backgroundColor: 'white',
  },
  text: {
    alignSelf: 'flex-start',
    color: 'white',
    alignItems: 'center',
  },
  textf: {
    alignSelf: 'flex-end',
    color: 'green',
    margin: 10,
  },
  footer: {
    color: 'white',

    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 40,
    marginTop: '18%',

    alignItems: 'baseline',
  },
  textHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
  image: {
    margin: 10,
    height: 70,
    width: '60%',
    padding: 60,
  },
})
