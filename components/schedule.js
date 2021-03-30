import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Schedule = (props) => {
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
          <Text>CHOOSE AN OPEN SLOT</Text>
          <Text>48618</Text>
        </View>
        <View>
          <Text>Location Map</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({})

export default Schedule;