import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, StyleSheet, Button } from 'react-native'
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons'

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
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title='Favorite'
            iconName='ios-star'
            onPress={() => {
              console.log('test...')
            }}
          />
        </HeaderButtons>
      ),
    })
  }, [])

  return (
    <View style={styles.screen}>
      <Text>The MealDetailsScreen 23424</Text>
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
