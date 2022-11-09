import { StyleSheet, Text, View, Button, FlatList, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import { colors } from '../global/styles.js';
import { restaurantData } from '../global/data';

import React from 'react'
import RestaurantCard from '../components/RestaurantCard.js';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function RestaurantScreen({ navigation }) {
  const { navigate } = useNavigation();
    return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        {/*<Button
          title="Go to Menu"              
          onPress ={()=>{navigation.navigate("Menu",{restaurantData})}}
    />*/}
          <View style ={styles.headerTextView}>
              <Text style ={styles.headerText}>Where Do You Want To Eat?</Text>
          </View>        
          <View>     
            <FlatList
              style={{marginTop:10, marginBottom:10}}
              data={restaurantData}
              vertical ={true}
              keyExtractor={(item,index)=>index.toString()}
              renderItem={({ item,index }) => (
                <RestaurantCard 
                  screenWidth={SCREEN_WIDTH*.94}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  businessAddress={item.businessAddress}
                  OnPressRestaurantCard ={()=>{navigation.navigate("Menu",{id:index,restaurant:item.restaurantName})}}
                    
                />
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
    borderRadius:30,
    paddingBottom:150
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
    paddingTop:20
    
  }
})
 
