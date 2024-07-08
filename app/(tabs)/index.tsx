import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Trip from '../components/Trip'
import Location from '../components/Location'
import ChatList from '../components/ChatList'



const index = () => {
  {
    
  return (
    <ScrollView>
      <Trip/>
      <Location/>
      <ChatList/>
    </ScrollView>
  )
}}

export default index