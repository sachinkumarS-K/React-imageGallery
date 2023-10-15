import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'
function Card({img , id , desc , title}) {
  return (
    <NavLink to = {`/image/${id}`}>
        <div className='image'>
        <img src= {img} alt="" />
        </div>
    </NavLink>
  )
}

export default Card
