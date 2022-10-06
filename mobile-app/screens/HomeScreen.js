import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, Button} from 'react-native'

import { auth } from '../firebase'
import { colors } from '../global/styles.js';

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Button
        title="Go to Restaurants"
        onPress={() => navigation.navigate('Restaurants')}
      />
   
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})