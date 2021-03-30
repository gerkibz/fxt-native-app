// SignUp.js
import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import vehicleInfo from './vehicleInfo';

export default class SignUp extends React.Component {
  state = {email: '', username: '', password: '', errorMessage: null};
  handleSignUp = () => {
    // TODO: Firebase stuff...
    console.log('handleSignUp');
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/logo-1.png')}
            style={styles.image}
          />
          <Text style={styles.textHeading}>Thanks for Joining Us!</Text>
          {this.state.errorMessage && (
            <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
          )}
          <Text style={styles.text}>Username:</Text>
          <TextInput
            placeholder="Username"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(email) => this.setState({username})}
            value={this.state.email}
          />
          <Text style={styles.text}>Email:</Text>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <Text style={styles.text}>Password:</Text>
          <TextInput
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('vehicleInfo')}
          />
          <View style={styles.footer}>
            <Text style={{color: 'white'}}>Already Have an account?</Text>
            <Text
              onPress={() => this.props.navigation.navigate('Login')}
              style={{color: 'green'}}>
              {' '}
              Login
            </Text>
          </View>
        </View>
      </ScrollView>
    )
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
    margin: 8,
    borderRadius: 18,
    backgroundColor: 'white',
  },
  text: {
    alignSelf: 'flex-start',
    color: 'white',
    alignItems: 'center',
  },
  footer: {
    color: 'white',

    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 40,
    marginTop: 30,
    flex: 0.2,
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
  }
})