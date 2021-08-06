import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'

function Restaurant({entireRestaurant}) {                       // entireRestaurant is the prop being passed. which should be equal to the whole object of all the restaurants
  
    const { photoUrl, name, address } = entireRestaurant        // here we are destructuring the exact categories we want from within the entireRestaurant object  

  return (
    <View>
      <Text>
          <Image style={styles.coverImg} source={{uri:photoUrl}} />
      </Text>
      <Text style={styles.restaurantName}>{ name }</Text>
      <Text style={styles.restaurantAddress}>{ address }</Text>
    </View>
  )
}

export default Restaurant
