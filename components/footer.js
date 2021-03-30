import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{color: 'white'}}>Don't Have an account?</Text>
      <Text
        onPress={() => this.props.navigation.navigate('SignUp')}
        style={{color: 'green'}}>
        {' '}
        Copyright FXT 2020. All rights reserved.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    color: 'white',

    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 40,
    marginTop: '18%',

    alignItems: 'baseline',
  },
});
