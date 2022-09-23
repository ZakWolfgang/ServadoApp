import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'

//import Tabs from './navigation/Tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { auth } from '../firebase'
//import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
const navigation = useNavigation()


  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4]}
        numColumns={2}
        renderItem={() => (
      <View style={{ 
        flex: 1,
        height: 150,
        borderWidth: 1,
        margin: 20
      }}/>
      )}
    />
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <Text>Welcome to Milan Mondays</Text>
    </View> 
    
  )
   
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})