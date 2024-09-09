import React from 'react'
import { useLocation } from 'react-router-dom'

const Summary = () => {
    const location =useLocation()
    const { address,city,zipcode}=location.state || {}
  return (
    <div>
        heel
      {address}
     
    </div>
  )
}

export default Summary
