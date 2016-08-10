import { VisibilityFilters, ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'
import { combineReducers } from '../node_modules/redux/dist/redux'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVED } = VisibilityFilters

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          index: action.index,
          completed: false
        }
      ]
    case REMOVE_TODO:
      return state.filter((todo) => todo.index !== action.index)
    case TOGGLE_TODO:
      return state
              .map(
                (todo) => todo.index === action.index ? {...todo, completed: !todo.completed } : todo
              )
    default:
      return state
  }
}

const reducers = combineReducers({ visibilityFilter, todos })

export default reducers
