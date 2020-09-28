import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const MealDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetailsScreen Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealDetailsScreen
