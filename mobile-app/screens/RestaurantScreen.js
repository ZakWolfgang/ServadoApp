import { StyleSheet, Text, View, Button, FlatList, Dimensions, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { colors } from '../global/styles.js';
import { restaurantData } from '../global/data';

import React from 'react'
import RestaurantCard from '../components/RestaurantCard.js';
import { color } from '@rneui/base';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function RestaurantScreen() {
  const navigation = useNavigation()
    return (
        <View style={styles.container}>
          <View style={styles.cardView}>
            <Button
              title="Go to Menu"
              onPress={() => navigation.navigate('Menu')}
            />
        <View style ={styles.headerTextView}>
          <Text style ={styles.headerText}>Where Do You Want To Eat?</Text>
        </View>
        
        
        <View>
          <FlatList
            style={{marginTop:10, marginBottom:10}}
            data={restaurantData}
            vertical ={true}
            keyExtractor={(item,index)=>index.toString()}

            renderItem={({ item }) => (
              <View style={{marginRight:5}}>
                <RestaurantCard 
                  screenWidth={SCREEN_WIDTH*0.90}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  businessAddress={item.businessAddress}
                />
              </View>
            )}
          />
        </View>
          </View>
            
      </View>
 
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor:colors.yellow,
    alignItems: 'center',
  },
  cardView: {
    alignItems:'center',
    backgroundColor:colors.white,
    width:'100%',
    borderRadius:30
  },
  headerText:{
    color:colors.darkBlue,
    fontSize:25,
    fontWeight:"bold",
    
  },
  headerTextView:{
    alignItems:'center',
    width:'100%',
    //backgroundColor:colors.darkBlue,
    paddingVertical:3,
    
  }
})
 
