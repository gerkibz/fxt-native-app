import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const Location = (props) => {
  return (
    <View>
      <View>
        <Image source={require('../assets/images/change-car-oil-3.png')} />
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
        <View style={{borderRadius:8}}>
          <Card >
            onPress 
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/images/brake-disk-3.png')} />
              <View style={{flexDirection: 'column'}}>
                <Text style={{margin: 1}}>Southfield Quality Cars</Text>
                <Text style={{margin: 1}}>16924 Westlight Road</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{margin: 1}}>Mon</Text>
                  <Text style={{margin: 1}}>Tue</Text>
                  <Text style={{margin: 1}}>Wed</Text>
                  <Text style={{margin: 1}}>Thur</Text>
                  <Text style={{margin: 1}}>Fri</Text>
                  <Text style={{margin: 1}}>Sat</Text>
                  <Text style={{margin: 1}}>Sun</Text>
                </View>
               
              </View>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({})

export default Location;
