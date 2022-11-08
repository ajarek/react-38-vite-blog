import React from 'react'
import data from '../.././assets/db.json'
import { NavLink } from 'react-router-dom'
import './MostLikedPost.css'
export const MostLikedPost = () => {
  const posts = data.posts.sort((a, b) => b.numLikes - a.numLikes).slice(0, 10)
  return (
    <div className={'wrapper-post'}>
      {posts.map((post) => {
        return (
          <NavLink
          className={'button-link'}
          to={`/posts/${post.id}`}
          key={post.id}
        >
          <div
            className={'row'}
            
          >
            <div className='wrap'>
              <p>{post.title}</p>
            </div>
            <div className='wrap'>
              <p>{ new Date(post.datePublished).toLocaleDateString()}</p>
            </div>
            <div className='wrap'>
              <p>Likes {post.numLikes}</p>
            </div>
          </div>
          </NavLink>
        )
      })}
    </div>
  )
}

export default MostLikedPost
