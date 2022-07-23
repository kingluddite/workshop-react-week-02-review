import React, { useState } from 'react'
import './CampsiteCard.css'
// react function components can store local state variables
// components re-render when updated
// local to component unless passed by props
// immutable setCount is how you update state
const CampsiteCard = (props) => {
  const [count, setCount] = useState(0)

  return <div className="myStyle">asynchronousThe current count is {count}</div>
}

export default CampsiteCard
