import React from 'react';
import {Text,View,Image,StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../global/styles'

export default function MenuCard({
    onPressMenuCard,
    meal,
    price,
    }){
    return(
        <TouchableOpacity onPress={onPressMenuCard}>
           <View style ={styles.container}>
                <Text style ={styles.meal}>{meal}</Text>
                <Text style = {styles.price}>${price}</Text>
           </View> 
        </TouchableOpacity>
        
    )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor:"white",
        elevation:4,
        shadowOpacity:0.4,
        shadowColor:"black",
        margin:7,
        padding:15
    },

    meal: {
        fontSize:15,
        color:'black',
        fontWeight:"bold"
    },

    price:{
        fontSize:15,
        color:"black",
    },

})