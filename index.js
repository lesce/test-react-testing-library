import React, { useState, useEffect } from 'react'

const Field = () => {
  const [value, setValue] = useState("")
  useEffect(() => {
    document.addEventListener("mousedown", () => setValue(""))
  }, [])
  return (
    <input
      data-testid="input"
      onChange={(event) => {
        setValue(event.target.value)
      }}
      value={value}
    />
  )
}

export default Field