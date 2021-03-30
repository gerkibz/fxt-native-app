import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Dealership = (props) => {
  return (
    <View>
      <View>
        <Text>SouthField Quality Cars</Text>
        <Image source={require('../assets/images/image 9.png')} />
      </View>
      <View>
        <Text>Date and Time</Text>
      </View>
      <View>
        <Text>Car Park logo</Text>
      </View>
      <View>
        <Text>DROP-OFF/PICK-UP</Text>
        <Text>Drop-off your vehicle at your assigned parking spot at your</Text>
        <Text>1A</Text>
        <Text>Your rental cars will be waiting for you at your schedule</Text>
        <Text>1B</Text>
        <Text>Your vehicle rental entry</Text>
        <Text>22600</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default Dealership;
