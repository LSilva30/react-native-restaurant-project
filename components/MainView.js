import { View, Text } from "react-native"
import React from 'react'
import { useState, useEffect } from 'react'
import Restaurant from "./Restaurant"


function MainView(){

const [restaurants, setRestaurants] = useState()

useEffect(() => {
  fetch('https://bocacode-intranet-api.web.app/restaurants')
    .then(response => response.json())
    .then(data => {
    //   console.log(data)
      setRestaurants(data)
    })
    .catch(error => console.log(error))
}, [])

    return (
        <View>
            {restaurants?.map(restaurant => {
                return <Restaurant entireRestaurant={restaurant} />
            })}
        </View>
    )
}

export default MainView