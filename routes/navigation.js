import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Loading from '../components/loading';
import SignUp from '../components/signup';
import Login from '../components/login';
import Main from '../components/main';
import userHome from '../components/userhome';
import vehicleInfo from '../components/vehicleInfo';
import Location from '../components/location';
import Services from '../components/services';
import Servicesoil from '../components/servicesoil';

const Stack = createStackNavigator();
export default class MyStack extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="vehicleInfo"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#00FF11E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={({title: 'SignUp'}, {headerShown: false})}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({title: 'Login'}, {headerLeft: null}, {headerShown: false})}
        />
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={({title: 'Loading'}, {headerLeft: null})}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={({title: 'Main'}, {headerLeft: null})}
        />
        <Stack.Screen
          name="userHome"
          component={userHome}
          options={
            ({title: 'User Home'}, {headerLeft: null}, {headerShown: false})
          }
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={
            ({title: 'Location'}, {headerLeft: null}, {headerShown: false})
          }
        />
        <Stack.Screen
          name="Services"
          component={Services}
          options={
            ({title: 'Services'}, {headerLeft: null}, {headerShown: false})
          }
        />
        <Stack.Screen
          name="Servicesoil"
          component={Servicesoil}
          options={
            ({title: 'Servicesoil'}, {headerLeft: null}, {headerShown: false})
          }
        />
        <Stack.Screen
          name="vehicleInfo"
          component={vehicleInfo}
          options={
            ({title: 'vehicleInfo'}, {headerLeft: null}, {headerShown: false})
          }
        />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
