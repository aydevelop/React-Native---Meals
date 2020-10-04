import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import MealList from '../components/MealList'
import { MEALS } from '../data/dummy'

export const FavoritesScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Your Favorites',
    })
  }, [])

  const favMeals = MEALS.filter((meal) => meal.id == 'm1')
  return <MealList listData={favMeals} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default FavoritesScreen
