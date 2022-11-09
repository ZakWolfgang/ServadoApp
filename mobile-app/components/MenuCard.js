import React,{ useState } from 'react';
import {Text,View,Image,StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../global/styles'
import { CheckBox } from "@rneui/themed"



export default function MenuCard({
    onPressMenuCard,
    meal,
    price,
    images,
    screenWidth
    }){
    
    const [check1, setCheck1] = useState(false);
 
    return(
        <TouchableOpacity onPress={onPressMenuCard}>
           <View style ={{...styles.container, width:screenWidth}}>
                <Image
                    style={{...styles.image, width:screenWidth*.93}}
                    source= {images}
                />

                <Text style ={styles.meal}>{meal}</Text>
                <Text style = {styles.price}>${price}</Text>
                <CheckBox
                    style={styles.checkbox}
                    center
                    title="Add To Cart"
                    size={40}
                    checked={check1}
                    onPress={() => setCheck1(!check1)}
                />
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
        marginVertical:9,
        borderWidth:.5
        
        
    },
    image:{
        borderRadius:15,
        height:150,
    
    },

    meal: {
        fontSize:20,
        color:'black',
        fontWeight:"bold",
        
    },

    price:{
        fontSize:20,
        color:"black",
    },


})