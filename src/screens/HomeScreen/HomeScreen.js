import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{alignSelf:'center'}}>HomeScreen</Text>
      <Text 
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 20,
          fontSize: 20,
        }}
        >
        Sign Out
      </Text>
    </View>
  )
}

export default HomeScreen