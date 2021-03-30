import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default class userHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={({flexDirection: 'column'}, {alignItems: 'center'})}>
          <Image source={require('../assets/images/Mask-Group-1.png')} />
          <Text style={{color: 'white'}}> Black Pearl </Text>
        </View>
        <View>
          <Text style={{color: 'white'}}>
            Winter is just around the corner. Make sure your tires are properly
            inflated for better traction in wet weather.
          </Text>
        </View>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: 'grey',
          }}
        />
        <View>
          <Text> milage estimation </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/images/change-car-oil-4.png')} />
          <Image source={require('../assets/images/brake-disk-6.png')} />
          <Image source={require('../assets/images/tyre-3.png')} />
          <Image source={require('../assets/images/tools-6.png')} />
        </View>
        <View>
          <TouchableOpacity
            style={[styles.containerr, {backgroundColor: 'white'}]}
            onPress={() => this.props.navigation.navigate('Services')}>
            <Text style={styles.submitText}>Get FXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  containerr: {
    width: '90%',
    height: 50,
    borderColor: 'blue',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
  },
  submitText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
