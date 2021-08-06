import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainView from './screens/MainView'
import RestaurantDetails from './screens/RestaurantDetails'
import CreateRestaurant from './screens/CreateRestaurant'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='MainView'
        component={MainView}
        options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
        name='RestaurantDetails'
        component={RestaurantDetails}
        options={{ title: 'Restaurant Details' }}
        />
        <Stack.Screen 
        name='CreateRestaurant'
        component={CreateRestaurant}
        options={{ title: 'Create Restaurant' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
