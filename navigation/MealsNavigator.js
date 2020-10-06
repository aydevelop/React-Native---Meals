import React, { Text } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FilltersScreen'
import Colors from '../constants/Colors'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function Navigator() {
  return (
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
  )
}

const FavNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Favorites'
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name='Favorites' component={FavoritesScreen} />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  )
}

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        style: { height: 60, paddingTop: 10 },
        labelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name='Meals'
        component={Navigator}
        options={{
          tabBarIcon: () => <Ionicons name='ios-restaurant' size={28} />,
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavNavigator}
        options={{
          tabBarIcon: () => <Ionicons name='ios-star' size={25} />,
        }}
      />
    </Tab.Navigator>
  )
}

const FiltersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Filters'
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primaryColor },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name='Filters' component={FiltersScreen} />
    </Stack.Navigator>
  )
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: 'red',
        style: { marginTop: 20 },
        labelStyle: {
          fontFamily: 'open-sans-bold',
        },
      }}
    >
      <Drawer.Screen name='Meals' component={Tabs} />
      <Drawer.Screen name='Filters' component={FiltersNavigator} />
    </Drawer.Navigator>
  )
}

export default MyDrawer
