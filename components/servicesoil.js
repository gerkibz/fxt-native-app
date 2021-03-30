import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class Servicesoil extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View>
            <Image source={require('../assets/images/oilservice.png')} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 15}}>
              <Image
                source={require('../assets/images/change-car-oil-1.png')}
              />
              <Text>OIL </Text>
              <Text>CHANGE</Text>
            </View>
            <View>
              <Text> A high motor oil viscosity number</Text>
              <Text>doesn’t necessarily provide better </Text>
              <Text>protection. Consult your owner’s </Text>
              <Text>manual to ensure you’re buying </Text>
              <Text>oil based on your motor conditions.</Text>
            </View>
          </View>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#000',
            }}
          />
          <View>
            <Text>SERVICES INCLUDED:</Text>
            <View>
              <Text>Synthetic Oil Change</Text>
              <Text>Tire Rotation</Text>
              <Text>Air Filter Replacement</Text>
              <Text>Wiper Replacement</Text>
              <Text>Top Off Vehicle Fluids</Text>
              <Text>Battery Test and Recharge</Text>
              <Text>Vehicel 75 Point</Text>
              <Text>Inspection</Text>
              <Text>Vehicle Diagnostics</Text>
              <Text>Report</Text>
              <Text>Cash Wash</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <View style={({backgroundColor: 'grey'})}>
                <Text>ONLY $155.96</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Location')}
                  style={{backgroundColor: 'white'}}>
                  <Text style={{alignSelf: 'center'}}>GET FXT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({})
