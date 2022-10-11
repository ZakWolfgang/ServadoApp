import React from 'react';
import {Text,View,Image,StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../global/styles'

export default function MenuCard({
    onPressMenuCard,
    meal,
    price,
    images,
    screenWidth
    }){
    return(
        <TouchableOpacity onPress={onPressMenuCard}>
           <View style ={{...styles.container, width:screenWidth}}>
                <Image
                    style={{...styles.image, width:screenWidth*.93}}
                    source= {images}
                />

                <Text style ={styles.meal}>{meal}</Text>
                <Text style = {styles.price}>${price}</Text>
           </View> 
        </TouchableOpacity>
        
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        elevation:4,
        shadowOpacity:0.5,
        shadowColor:"black",
        margin:7,
        padding:15,
        borderRadius:30,
        marginVertical:9
        
        
    },
    image:{
        borderRadius:15,
        height:150,
        

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