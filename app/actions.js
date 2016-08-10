export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVED: 'SHOW_ACTIVED'
}


export const addTodo = (index, text) => {
  return { type: ADD_TODO, text, index }
}

export const removeTodo = (index) => {
  return { type: REMOVE_TODO, index }
}

export const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index }
}

export const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, filter }
}
