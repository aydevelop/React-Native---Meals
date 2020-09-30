import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const MealDetailsScreen = (props) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.title,
    })
  }, [])

  return (
    <View style={styles.screen}>
      <Text>
        The MealDetailsScreen Screen!!!!### {props.route.params.title}
      </Text>
      <Button
        title='Go Back'
        onPress={() => {
          props.navigation.goBack()
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
