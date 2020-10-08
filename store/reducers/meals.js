import { MEALS } from '../../data/dummy'

const initialstate = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}

const mealsReducer = (state = initialstate, action) => {
  return state
}

export default mealsReducer
