import { MEALS } from '../../data/dummy'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals'

const initialstate = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}

const mealsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      )
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals]
        updatedFavMeals.splice(existingIndex, 1)
        return { ...state, favoriteMeals: updatedFavMeals }
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId)
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
      }

    case SET_FILTERS:
      const appliedFillters = action.filters
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFillters.glutenFree && !meal.isGlutenFree) {
          return false
        }

        if (appliedFillters.lactoseFree && !meal.isLactoseFree) {
          return false
        }

        if (appliedFillters.vegetarian && !meal.isVegetarian) {
          return false
        }

        if (appliedFillters.vegan && !meal.isVegan) {
          return false
        }

        return true
      })

      return { ...state, filteredMeals: updatedFilteredMeals }

    default:
      return state
  }
}

export default mealsReducer
