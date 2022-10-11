import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import {restaurantData} from '../global/data'


export default function RestaurantHeader({navigation,id}) {

    return (
        <View style ={styles.container}>
            <ImageBackground
                style = {styles.container}
                source ={{uri:restaurantData[id].images}}
                
                >
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

container:{
    height:150,
    },

})
