import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import MealList from '../components/MealList'
import { MEALS } from '../data/dummy'

export const FavoritesScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Your Favorites',
    })
  }, [])

  const favMeals = useSelector((state) => state.meals.favoriteMeals)

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.screen}>
        <Text style={{ fontSize: 18 }}>No favorite meals found!</Text>
      </View>
    )
  }

  return <MealList navigation={navigation} listData={favMeals} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default FavoritesScreen
