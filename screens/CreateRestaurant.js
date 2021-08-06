import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

function CreateRestaurant() {

  const [ name, setName ] = useState('')  
  const [ address, setAddress ] = useState('')  
  const [ photoUrl, setPhotoUrl ] = useState('')  
  const [ rating, setRating ] = useState('')  

  const newRestaurant = {
    name: name,
    address: address,
    photoUrl: photoUrl,
    rating: rating,
  }
    // console.log('testing --->', newRestaurant)

  const getNewRestaurant = () => {
    fetch('https://bocacode-intranet-api.web.app/restaurants', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRestaurant),
    })
      .then(() => console.log('SUCCESS: added new Restaurant!'))
      .catch(error => console.log(error))
  }

  return (
    <View>
      <Text>Input Restaurant Info:</Text>
      <TextInput 
      placeholder='Restaurant Name'
      onChangeText={ text => setName(text)}
      />
      <TextInput 
      placeholder='Address'
      onChangeText={ text => setAddress(text)}
      />
      <TextInput 
      placeholder='Photo Url'
      onChangeText={ text => setPhotoUrl(text)}
      />
      <TextInput 
      placeholder='Rating'
      onChangeText={ text => setRating(text)}
      />
      <TouchableOpacity
      onPress={getNewRestaurant}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateRestaurant
