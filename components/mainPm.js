import React, { Component } from 'react'
import { Text, StyleSheet, View , SafeAreaView, StyleSheet,StatusBar,TouchableWithoutFeedback} from 'react-native'

const App = () =>(
    return (
        <>
                <StatusBar barStyle='darkcontent'/>
                <SafeAreaView style={styles.container}>
                    <TouchableWithoutFeedback>
                        <Text style={styles.textSize}>Show Popup</Text>
                    </TouchableWithoutFeedback>
                </SafeAreaView>
        </>        
            )
    )

       
    

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    textSize:{
        fontSize: 20,
    }
})
export default App