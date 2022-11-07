import React from 'react'
import data from '../.././assets/db.json'
import { useParams } from 'react-router-dom'
import './Posts.css'
export const Posts = () => {
  const { id } = useParams()
  const postsDesc = data.posts.find((el) => el.id === id)
  const idAuthor = postsDesc.authorId
  const foundAuthor = data.authors.filter((elem)=> elem.id == idAuthor)
 
  return (
    <div className={'posts-desc'}>
      <h2>{postsDesc.title}</h2>
      <p>{postsDesc.description}</p>
      <p>Date : {new Date(postsDesc.datePublished).toLocaleDateString()}</p>
      <h5>Author : {foundAuthor[0].firstName+' '+foundAuthor[0].lastName}</h5>
      <p>LIKES : {postsDesc.numLikes}</p>
    </div>
  )
}

export default Posts
