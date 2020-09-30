import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const MealDetailsScreen = ({ route, navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    })
  }, [])

  return (
    <View style={styles.screen}>
      <Text>The MealDetailsScreen Screen {route.params.title}</Text>
      <Button
        title='Go Back'
        onPress={() => {
          navigation.goBack()
        }}
      />
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
