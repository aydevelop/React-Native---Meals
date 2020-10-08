import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, Switch } from 'react-native'

import Colors from '../constants/Colors'
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons'

const IoniconsHeaderButton = (props) => (
  <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color='white'
  />
)

const FilterSwitch = (props) => {
  return (
    <View style={styles.filter}>
      <Text style={{ fontSize: 18 }}>{props.label}</Text>
      <Switch
        style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
        trackColor={{ true: Colors.accentColor }}
        thumbColor={Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  )
}

export const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title='Favorite'
            iconName='ios-menu'
            onPress={() => {
              props.navigation.toggleDrawer()
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title='Favorite'
            iconName='ios-save'
            onPress={() => {
              props.navigation.toggleDrawer()
            }}
          />
        </HeaderButtons>
      ),
    })
  }, [])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <FilterSwitch
        label='Gluten-free'
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-free'
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginVertical: 15,
    borderWidth: 1,
    padding: 8,
  },
})

export default FiltersScreen
