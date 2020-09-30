import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'

const Stack = createStackNavigator()

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Categories'
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primaryColor },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen name='Categories' component={CategoriesScreen} />
        <Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} />
        <Stack.Screen name='MealDetail' component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
