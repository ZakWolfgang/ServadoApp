import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, parameters } from '../global/styles'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={{fontWeight:'bold', fonstSize:22}}>
        {props.name}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  header:{
    flexDirection:"row",
    backgroundColor:colors.darkBlue,
    height:parameters.headerHeight,

  },
})