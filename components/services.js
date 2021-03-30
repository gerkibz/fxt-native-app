import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default class Services extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../assets/images/Mask-Group-1.png')} />
          <Text> Black Pearl </Text>
        </View>
        <View>
          <Text>Choose a Service to get started</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('Servicesoil')}>
            <View style={{margin: 15}}>
              <Image
                source={require('../assets/images/change-car-oil-1.png')}
              />
              <Text style={{marginTop: 35}}>OIL </Text>
              <Text>CHANGE</Text>
            </View>
            </TouchableOpacity>

          <View style={{margin: 15}}>
            <Image source={require('../assets/images/brake-disk-1.png')} />
            <Text>BRAKE </Text>
            <Text>REPAIR</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{margin: 15}}>
            <Image source={require('../assets/images/tyre-1.png')} />
            <Text>TIRE </Text>
            <Text>REPLACEMENT</Text>
          </View>
          <View style={{margin: 15}}>
            <Image source={require('../assets/images/tools-5.png')} />
            <Text style={styles.text}>RECOMMENDED </Text>
            <Text>MAINTAINANCE</Text>
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
          <Text>
            {' '}
            Car tires can last up to 50,000 miles. Make sure your car has safe
            tires by doing the tread test, or placing a penny in the tread. If
            the head is completely visible, your tread is low and your tires
            need to be replaced. Rotate your tires every 6,000 to 8,000 miles.{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flexDirection: 'column',
  },
});
