'use strict'

import 'babel-polyfill'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import { addTodo, ADD_TODO } from '../../app/actions'

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
})