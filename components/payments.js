import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Payments = (props) => {
  return (
    <View>
      <View>
        <Image source={require('../assets/images/oil-change-3.png')} />
        <Text>OIL CHANGE</Text>
      </View>
      <View>
        <Text>SERVICES INCLUDED:</Text>
        <View>
          <Text>Synthetic Oil Change</Text>
          <Text>Tire Rotation</Text>
          <Text>Air Filter Replacement</Text>
          <Text>Wiper Replacement</Text>
          <Text>Top Off Vehicle Fluids</Text>
          <Text>Battery Test & Recharge</Text>
        </View>
        <View>
          <Text> Vehicle 75 Point</Text>
          <Text>Inspection</Text>
          <Text>Vehicle</Text>
          <Text>Report</Text>
          <Text>Car Wash</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>Location card</Text>
          <Text>Current Date and Time</Text>
        </View>
        <View>
          <Text>Payment</Text>
          <View>
            <Text>Name</Text>
            <View>
              <Text>Card Number</Text>
              <Text>CVV</Text>
            </View>
            <Text>Expiration</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default Payments;
