import React from 'react'
import { NavLink } from "react-router-dom"
import './Navigation.css'
const Navigation = () => {
  return (
    <nav className={'nav'}>
      <NavLink
        className={'link'}
        to='/'
      >
        Home
      </NavLink>
      <div className={"wrapper"}>
      <NavLink
        className={'link'}
        to='/'
      >
        Authors
      </NavLink>
      <NavLink
        className={'link'}
        to='/mostLikedPost'
      >
        MostLikedPost
      </NavLink>
      <NavLink
        className={'link'}
        to='/mostCommentPost'
      >
        MostCommentPost
      </NavLink>
      </div>
    </nav>
  )
}

export default Navigation