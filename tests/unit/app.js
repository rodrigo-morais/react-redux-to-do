'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import * as appTodo from '../../app/app'

describe('Todo', () => {
  context('App', () => {
    it("should return an array of Todos when it is empty and receive a todo", () => {
      let expected = {
            todos: [{
              text: 'first text'
            }]
          }

      deepFreeze(appTodo)

      appTodo.boundAddTodo('first text')

      expect(expected).to.deep.equal(appTodo.store.getState())
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

        appTodo.boundAddTodo('second text')

        expect(2).to.be.equal(appTodo.store.getState().todos.length)
      })
  })
})