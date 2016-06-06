'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { addTodo, removeTodo, toggleTodo, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../../app/actions'

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
  })
})