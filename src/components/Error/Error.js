import React from 'react'
import {Link} from 'react-router-dom'
export const Error = () => {
  return (
    <>
    <h1>404</h1>
    <h2>אין עמוד כזה</h2>
    <Link to='/'>חזרה לדף הראשי</Link>
    </>
  )
}
