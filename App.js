import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import MainView from './components/MainView'
import TitleHeader from './components/TitleHeader'

import styles from './styles'

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView >
        <View style={styles.container}>
          <TitleHeader />
          <MainView />
        <StatusBar style='auto' />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}
