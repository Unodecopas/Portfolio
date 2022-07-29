import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [today, setToday] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  const time = today.toLocaleTimeString('es', { hour: 'numeric', hour12: false, minute: 'numeric' })
  return (
    <div>
        {time}
    </div>
  )
}

export default Clock
