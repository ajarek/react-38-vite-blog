import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../.././assets/db.json'
import { NavLink } from 'react-router-dom'
import './Profile.css'

export const Profile = () => {
  const { id } = useParams()
  const found = data.authors.find((el) => el.id === id)
  const postsId = data.posts.filter((el) => el.authorId === Number(id))

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
      <div className='posts-id'>
        <h2>Posts</h2>
        {postsId.map((el) => {
          return (
            <NavLink
              className={'button-link'}
              to={`/posts/${el.id}`}
              key={el.id}
            >
              <div className={'row'}>
                <div className='wrap'>
                  <p>{el.title}</p>
                </div>
                <div className='wrap'>
                  <p>{new Date(el.datePublished).toLocaleDateString()}</p>
                </div>
                <div className='wrap'>
                  <p>Likes {el.numLikes}</p>
                </div>
              </div>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default Profile
