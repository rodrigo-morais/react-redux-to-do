'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { addTodo, removeTodo, toggleTodo, setVisibilityFilter, VisibilityFilters, ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../../app/actions'

describe('Todo', () => {
  context('Actions', () => {
    it("should return an object with the type as ADD_TODO and the text", () => {
      let expected = {
            type: ADD_TODO,
            index: 1,
            text: 'first text'
          },
          todoReturn = addTodo(1, 'first text')

      expect(expected).to.deep.equal(todoReturn)
    })

    it("should return an object with the type as REMOVE_TODO and the index", () => {
      let expected = {
            type: REMOVE_TODO,
            index: 1
          },
          todoReturn = removeTodo(1)

      expect(expected).to.deep.equal(todoReturn)
    })

    it("should return an object with the type as TOGGLE_TODO and the index", () => {
      let expected = {
            type: TOGGLE_TODO,
            index: 1
          },
          todoReturn = toggleTodo(1)

      expect(expected).to.deep.equal(todoReturn)
    })

    it("should return an object with the type as SET_VISIBILITY_FILTER and the filter", () => {
      let expected = {
            type: SET_VISIBILITY_FILTER,
            filter: VisibilityFilters.SHOW_ALL
          },
          visibilityReturn = setVisibilityFilter(VisibilityFilters.SHOW_ALL)

      expect(expected).to.deep.equal(visibilityReturn)
    })
  })
})