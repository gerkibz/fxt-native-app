/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Inputs from '../addcomp/inputs';
export default class vehicleInfo extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'black}'}}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Inputs name="Vehicle Make" />
            <Inputs name="Year" />
            <Inputs name="Model" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Inputs name="Licence ID NO" />
            <Inputs name="Issuing State" />
          </View>
          <View>
            <Inputs name="Date of Birth" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Inputs name="Insurance Carrier" />
            <Inputs name="ID" />
          </View>
          <View>
            <Inputs name="Expiration Date" />
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
  },
});
