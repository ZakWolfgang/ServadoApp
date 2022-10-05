import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React,{Component } from 'react'


import { restaurantData, productData } from '../global/data';
import MenuCard from '../components/MenuCard';
import { colors } from '../global/styles.js';

const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;


export default function MenuScreen({navigation, productData}) {
    return (
      <View style={styles.container}>
        <View style={styles.cardView}>
          {/*<Button
            title="Go to Payment"
            onPress={() => navigation.navigate('Payment')}
    />*/}
        <View style ={styles.headerTextView}>
          <Text style ={styles.headerText}>What Do You Want To Eat?</Text>
        </View> 
        <View>
        <View style ={{flex:1}}>
            <View style ={styles.menuCard}>
                <FlatList 
                    style={{marginTop:10, marginBottom:10}}
                    data = {restaurantData}
                    keyExtractor = {(item,index)=>index.toString()}
                    renderItem = {({item,index})=>(
                      <MenuCard 
                        meal ={item.meal}
                        price ={item.price}
                        onPressMenuCard={()=>{navigation.navigate("Payment",{id:index,restaurant:item.restaurantName})}}
                      />
                    )}
                />
            </View>
            <TouchableOpacity>
              <View style ={styles.cartContainer}>
                <View style ={styles.cartCounterContainer}>
                  <Text style ={styles.cartText}>View Cart</Text>
                    <View style ={styles.cartCounter}>
                      <Text style ={styles.cartNum}>0</Text>
                    </View>
                </View>
              </View>
            </TouchableOpacity>
        </View>
        </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.yellow,
    alignItems: 'center'
  },
  cardView: {
    alignItems:'center',
    backgroundColor:colors.white,
    width:'100%',
    borderRadius:30,
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
    
  },
  menuCard:{
    marginTop:5,
    paddingBottom:20,
    width:'100%'

  },
  cartContainer:{
    backgroundColor:'white',
    height:50,
    alignContent:"center",
    marginBottom:0,
    justifyContent:"center"
        
  },

  cartCounterContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },

  cartText:{
    padding:10,
    fontWeight:"bold",
    fontSize:18,
    color:"black"
  },

  cartCounter:{ 
    borderWidth:1,
    marginRight:10,
    borderColor:"black",
    borderRadius:6,
    paddingBottom:2
  },

  cartNum:{
    paddingHorizontal:3,
    fontWeight:"bold",
    fontSize:18,
    color:"black",
  },
  
})