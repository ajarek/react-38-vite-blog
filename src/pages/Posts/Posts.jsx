import React from 'react'
import data from '../.././assets/db.json'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Posts.css'
export const Posts = () => {
  const { id } = useParams()
  
  const postsDesc = data.posts.find((el) => el.id === id)
  const idAuthor = postsDesc.authorId
  const foundAuthor = data.authors.filter((elem)=> elem.id == idAuthor)
  const commentsPost=data.comments.filter(comment=>comment.postId===Number(id))
  

  return (
    <>
    <div className={'posts-desc'}>
      <h2>{postsDesc.title}</h2>
      <p>{postsDesc.description}</p>
      <p>Date : {new Date(postsDesc.datePublished).toLocaleDateString()}</p>
      <h5>Author : {foundAuthor[0].firstName+' '+foundAuthor[0].lastName}</h5>
      <p>LIKES : {postsDesc.numLikes}</p>
    </div>
    <h1>Comments</h1>
    {commentsPost.map((el)=>{
      return(
        <div key={el.authorId} className={'comments'}>
          <NavLink
                className={'button-link'}
                to={`/profile/${el.authorId}`}
              >
          <img
                src={`https://joeschmoe.io/api/v1/${(data.authors.find(author=>author.id==el.authorId)).firstName}`}
                alt=''
              />
          

        <h4>{(data.authors.find(author=>author.id==el.authorId)).firstName+' '+(data.authors.find(author=>author.id==el.authorId)).lastName}</h4>

       

        <p><b>Comment:</b> {el.text}</p>
        </NavLink>
        </div>
      )
    })}
    </>
  )
}

export default Posts
