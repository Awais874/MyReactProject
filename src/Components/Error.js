import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
  return (
    <div>
       <h1>Oppps...!!!! Error found Please Change Path</h1>
        <h1>{err.status}</h1>
        </div>
  )
}

export default Error