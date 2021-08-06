import React from 'react'
import { View, Text, Image, Button } from "react-native";

function RestaurantDetails({ route, navigation }) {
    // console.log('These are my props---->', props.route.params.restaurant)
    const { name, photoUrl, address } = route.params.restaurant

    return (
        <View>
            <Text>Restaurant Details</Text>
            <Text>{name}</Text>
            <Text>{address}</Text>
            <Image source={{uri:photoUrl}} style={{ width: '100%', height: 200 }} />
            <Button title='Create New Restaurant' onPress={() => navigation.navigate('CreateRestaurant')} />
        </View>
    )
}

export default RestaurantDetails