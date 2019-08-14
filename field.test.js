import { render, fireEvent } from 'react-testing-library'
import React from 'react'
import Field from './index'

const map = {}
document.addEventListener = jest.fn((event, cb) => (map[event] = cb))

test("changes input value and resets it after click", () => {
  const { getByTestId } = render(<Field />)
  const inputValue = "lorem ipsum..."

  fireEvent.change(getByTestId("input"), { target: { value: inputValue } })
  expect(getByTestId("input").value).toBe(inputValue)

  map.mousedown()
  expect(getByTestId("input").value).toBe("")
})
