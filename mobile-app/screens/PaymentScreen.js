import { StyleSheet, Text, View, Image  } from 'react-native'
//import { useNavigation } from '@react-navigation/core'
import React from 'react'
import image from '../images/venmo.png'

const PaymentScreen = () => {
  return (
    <View styls={styles.container}>
      <Image
        style={styles.venmo}
        source={image}

        />
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  venmo:{
    alignSelf:'center',
    marginTop:100,
    width:150,
    height:150,

  }
})