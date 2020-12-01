import React from 'react'
import { Text, Button, TextInput, StyleSheet, View } from 'react-native'
import {formik} from 'formik'

export default function paymentsForm() {

        return (
            <View>
                <Formik>
                    initialValues = {{vehicelMake, year, model, licenseID, issuingState, birthDate, issuranceCarrier,ID, expirationDate}}
                    onsubmit = {(values) =>{

                    }}
                    {(props)=>( 
                    <view>
                        <TextInput style = {StyleSheet.input}
                                    placeholder = 'Vehicle Make'
                                    onChangeText = {props.handleChange('vehicelMake')}
                                    value = {props.values.vehicleMake}
                            />

                      
                    </view>
                    } )
                </Formik>
            </View>
        )
    }

