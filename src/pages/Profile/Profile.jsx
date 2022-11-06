import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../.././assets/db.json'
import './Profile.css'
export const Profile = () => {
  const { id } = useParams()
  const found = data.authors.find((el) => el.id === id)
  return (
    <div className={'profile'}>
      <div className={'profile-card'}>
        <img
          src={`https://joeschmoe.io/api/v1/${found.firstName}`}
          alt=''
        />
        <h2>{found.firstName + ' ' + found.lastName}</h2>
        <p>{'mobile: ' + found.phone.split('x')[0].split('.').join('-')}</p>
        <p>{'POSTS: ' + found.numPosts}</p>
        <p>{'LIKES:' + found.numLikes}</p>
      </div>
    </div>
  )
}

export default Profile
