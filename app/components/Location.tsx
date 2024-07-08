import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const Location = () => {
  return (
    <View>
    <View style={{flexDirection:"row",padding:10}}>
      <MaterialIcons style={{}} name="account-circle" size={40} color="black" />
      <View style={{flexDirection:'column' ,marginLeft:7}}>
        <View style={{flexDirection:"row"}}>
        <Text>From</Text><Text style={{marginLeft:5}}>IGI Airport</Text>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text>To</Text><Text style={{marginLeft:5}}>IGI Airport</Text>
        </View>
      </View>
    </View>
    <View style={{backgroundColor:'white'}}>
        <Text style={{borderColor:'#C0C0C0',borderWidth:.7,height:.1}}/>
      </View>
    </View>

  )
}

export default Location

const styles = StyleSheet.create({})
