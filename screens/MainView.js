import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, SafeAreaView, StatusBar, Button } from 'react-native'
import Restaurant from '../components/Restaurant'

import styles from '../styles'

function MainView({navigation}) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(allRestaurants => {
        //   console.log(allRestaurants)
        setRestaurants(allRestaurants)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <View>
      <Text>Recommended Restaurants</Text>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.container}>
            <StatusBar style='auto' />
          </View>
          {restaurants?.map(singleRestaurant => {
            //   console.log(singleRestaurant)
            return (
              <View key={singleRestaurant.id}>
                <Restaurant entireRestaurant={singleRestaurant} />
                <Button  title='More Details' onPress={() => navigation.navigate('RestaurantDetails', {restaurant: singleRestaurant})} />
              </View>
            )
          })}
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}

export default MainView
