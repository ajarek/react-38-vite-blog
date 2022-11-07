import React from 'react'
import data from '../.././assets/db.json'
import './MostLikedPost.css'
export const MostLikedPost = () => {
  const posts = data.posts.sort((a, b) => b.numLikes - a.numLikes).slice(0, 10)
  return (
    <div className={'wrapper-post'}>
      {posts.map((post) => {
        return (
          <div
            className={'row'}
            key={post.id}
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
        )
      })}
    </div>
  )
}

export default MostLikedPost
