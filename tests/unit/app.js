'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { addTodo, ADD_TODO } from '../../app/actions'
import appTodo from '../../app/app'

describe('Todo', () => {
  context('Actions', () => {
    it("should return an array with one object with the type as ADD_TODO and the text", () => {
      let expected = {
            type: ADD_TODO,
            text: 'first text'
          },
          todoReturn = addTodo('first text')

      expect(expected).to.deep.equal(todoReturn)
    })
  })

  context('App', () => {
    it("should return an array of Todos when it is empty and receive a todo", () => {
      let expected = {
            todos: [{
              text: 'first text'
            }]
          }

      deepFreeze(appTodo)

      appTodo.dispatch(addTodo('first text'))

      expect(expected).to.deep.equal(appTodo.getState())
    })

    it("should return an array of Todos when it is empty and receive a todo", () => {
        let expected = {
              todos: [{
                text: 'first text'
              },
              {
                text: 'second text'
              }]
            }

        deepFreeze(appTodo)

        appTodo.dispatch(addTodo('second text'))

        expect(2).to.be.equal(appTodo.getState().todos.length)
      })
  })
})