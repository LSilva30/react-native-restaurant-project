import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'

function Restaurant({entireRestaurant}) {
  
    const { photoUrl, name, address } = entireRestaurant

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
