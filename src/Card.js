import React from 'react'

export default function Card(props) {
  return (
    <div className='Card'>
        <p>Name = {props.name} </p>
        <p>Has Access = {props.hasAccess} </p>
        <p>Id = {props.id} </p>
    </div>
  )
}
