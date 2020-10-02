import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy'
import MealItem from '../components/MealItem'

export const MealDetailsScreen = ({ route, navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    })
  }, [])

  const catId = CATEGORIES.find((c) => c.title == route.params.title).id
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  )

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', {
            meal: itemData.item,
          })
        }}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )

  // return (
  //   <View style={styles.screen}>
  //     <Text>The MealDetailsScreen!!! Screen {route.params.title}</Text>
  //     <Button
  //       title='Go Back'
  //       onPress={() => {
  //         navigation.goBack()
  //       }}
  //     />
  //   </View>
  // )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default MealDetailsScreen
