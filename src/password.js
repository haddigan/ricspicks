import React from 'react'
import { useState } from 'react'
export default function Password({ children }) {
  const [locked, setLocked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocked(false)
  }

  if (locked) {
    return (
      <div style={{ fontSize: '72px' }}>
        <form onSubmit={handleSubmit}>
          <label>
            Password: <input type="password" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
  return <>{children}</>
}
