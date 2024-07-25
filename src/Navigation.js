import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav style={{backgroundColor:'#008080'}}>
        <Link to='/'>Home</Link>
        <Link to='/View'>View Team</Link>
        <Link to ='/Edit'>Edit Team</Link>
    </nav>   
  )
}
