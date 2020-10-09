import React, { useCallback } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, View, Text, StyleSheet, Button, Image } from 'react-native'
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux'

import { toggleFavorite } from '../store/actions/meals'
import Colors from '../constants/Colors'
const IoniconsHeaderButton = (props) => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color='white'
  />
)

export const MealDetailsScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const favMeals = useSelector((state) => state.meals.favoriteMeals)

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title='Favorite'
            iconName='ios-star'
            onPress={() => {
              dispatch(toggleFavorite(route.params.meal.id))
            }}
          />
        </HeaderButtons>
      ),
    })
  }, [])

  return (
    <ScrollView style={{ marginTop: 20, marginBottom: 40 }}>
      <Image
        style={styles.image}
        source={{ uri: route.params.meal.imageUrl }}
      />

      <View style={styles.details}>
        <Text>{route.params.meal.duration}m</Text>
        <Text>{route.params.meal.complexity.toUpperCase()}</Text>
        <Text>{route.params.meal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <View style={styles.item}>
        {route.params.meal.ingredients.map((ing) => (
          <Text key={ing}>{ing}</Text>
        ))}
      </View>
      <Text style={styles.title}>Steps</Text>
      <View>
        {route.params.meal.steps.map((step) => (
          <Text style={styles.item} key={step}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: 'indigo',
    borderWidth: 1,
    padding: 10,
  },
})

export default MealDetailsScreen
