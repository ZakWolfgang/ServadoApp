import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed";

import { colors } from '../global/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from '@rneui/base';

import { restaurantData } from '../global/data';


export default function RestaurantCard({
    OnPressRestaurantCard,
    restaurantName,
    businessAddress,
    images,
    screenWidth
}) {

    return(
        <TouchableOpacity onPress={OnPressRestaurantCard}>
            <View style={{...styles.cardView, width:screenWidth}}>

                <Image
                    style={{...styles.image, width:screenWidth}}
                    source= {images}
                />

                <View>
                    <View>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                    </View>

                    <View style ={{flex:1, flexDirection:"row"}}>
                        <Icon 
                            name='place'
                            type='material'
                            color={'#808080'}
                        />
                        <Text style={styles.address}>{businessAddress}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView:{
        backgroundColor:colors.white,
        marginVertical:9,
        borderRadius:15,
        borderWidth:.5,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        elevation: 10,

        
    },
    image:{
        borderRadius:15,
        height:150,

    },
    restaurantName:{
        paddingLeft:10,
        fontSize:20,
        fontWeight:'bold',
        color:colors.black,
        marginTop:5,
    },
    address:{
        paddingLeft:1,
        fontSize:16,
        flex:12,
        paddingTop:5,
        color:colors.black,
        paddingVertical:10,

    }
})