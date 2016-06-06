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
              text: 'first text',
              index: 1,
              completed: false
            }]
          }

      deepFreeze(appTodo)

      appTodo.boundAddTodo('first text')

      expect(expected).to.deep.equal(appTodo.store.getState())
    })

    it("should return an array with two Todos when it has one todo", () => {
      let expected = {
            todos: [{
              text: 'first text',
              index: 1,
              completed: false
            },
            {
              text: 'second text',
              index: 2,
              completed: false
            }]
          }

      deepFreeze(appTodo)

      appTodo.boundAddTodo('second text')

      expect(2).to.be.equal(appTodo.store.getState().todos.length)
    })

    it("should return an array with one todo when it has two todos", () => {
      let expected = {
            todos: [{
              text: 'first text',
              index: 1,
              completed: false
            }]
          }

      deepFreeze(appTodo)

      appTodo.boundRemoveTodo(2)

      expect(1).to.be.equal(appTodo.store.getState().todos.length)
    })

    it("should return an array with one todo when the index informed doesn't exist", () => {
      let expected = {
            todos: [{
              text: 'first text',
              index: 1,
              completed: false
            }]
          }

      deepFreeze(appTodo)

      appTodo.boundRemoveTodo(2)

      expect(1).to.be.equal(appTodo.store.getState().todos.length)
    })

    it("should return an empty array when it has one todo", () => {
      let expected = {
            todos: []
          }

      deepFreeze(appTodo)

      appTodo.boundRemoveTodo(1)

      expect(0).to.be.equal(appTodo.store.getState().todos.length)
    })

    it("should return an array with one incomplete Todo when it is empty", () => {
      let expected = {
            todos: [{
              text: 'first text',
              index: 1,
              completed: false
            }]
          }

      deepFreeze(appTodo)

      appTodo.boundAddTodo('first text')

      expect(expected).to.deep.equal(appTodo.store.getState())
    })

    it("should return an array with one complete Todo when it was incompleted", () => {
      deepFreeze(appTodo)

      appTodo.boundToggleTodo(1)

      expect(true).to.be.equal(appTodo.store.getState().todos[0].completed)
    })

    it("should return an array with one incomplete Todo when it was completed", () => {
      deepFreeze(appTodo)

      appTodo.boundToggleTodo(1)

      expect(false).to.be.equal(appTodo.store.getState().todos[0].completed)
    })
  })
})