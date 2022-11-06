import React, { useState } from 'react'
import data from '../.././assets/db.json'
import Pagination from '../../components/Pagination/Pagination'
import { NavLink } from "react-router-dom"
import './PageHome.css'

export const PageHome = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20)
  // console.log(data.authors)
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentAuthors = data.authors.slice(firstPostIndex, lastPostIndex)
  return (
    <>
    <div className={'home'}>
      {currentAuthors.map((author) => {
        return (
          <div
            className={'card'}
            key={author.id}
          >
            <img
              src={`https://joeschmoe.io/api/v1/${author.firstName}`}
              alt=''
            />
            <p>{author.firstName + ' ' + author.lastName}</p>
            <NavLink
            className={'button-link'}
            
             to={`/profile/${author.id}`}
             
            >Click to view Profile
            </NavLink>
            
          </div>
        )
      })}
      
    </div>
    <Pagination
        totalPosts={data.authors.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  )
}

export default PageHome
