import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Inputs from '../addons/inputs'

export default class paymentInfo extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: 'black}'}}>
        <View style={styles.container}>
          <View>
            <Inputs name="Payment Method" />
          </View>
          <View>
            <Inputs name="Credit/Debit Card Number" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Inputs name="Expiration Month" />
            <Inputs name="Expiration Year" />
          </View>
          <View>
            <Inputs name="Full Name" />
          </View>
          <View>
            <Inputs name="Billing Address" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Inputs name="Zip Code" />
            <Inputs name="Country/Region" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({})
