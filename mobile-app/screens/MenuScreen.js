import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React from 'react'

import { colors } from '../global/styles.js';


const data = [
  { id: '1', title: 'BBQ Chicken' },
  { id: '2', title: "Steak and Potatos" },
  { id: '3', title: "Salmon and Rice" },
  { id: '4', title: "Gumbo"}
];




const MenuScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Button
        title="Go to Payment"
        onPress={() => navigation.navigate('Payment')}
      />
      <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
              <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                <Text style={styles.listItemText}>{item.title}</Text> 
              </TouchableOpacity>
              </View>
            )}
          />
   
    </View>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.darkBlue,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700'
  },
  listItem: {
    marginTop: 20,
    paddingVertical: 40,
    paddingHorizontal: 70,
    alignItems: 'center',
    backgroundColor:colors.white,
    width: '100%',
    borderRadius: 20,
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.4,  
    shadowRadius: 3,  
  },
  listItemText: {
    fontSize: 25
  }
})

