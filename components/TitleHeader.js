import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'

function TitleHeader() {
  return (
    <View>
      <Text style={styles.headerText}>Recommended Restaurant</Text>
    </View>
  )
}

export default TitleHeader
