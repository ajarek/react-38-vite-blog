import React from 'react'
import data from '../.././assets/db.json'
import './PageHome.css'
export const PageHome = () => {
  // console.log(data.authors)
  return (
    <div 
    className={'home'}
    >
      {data.authors.map((author) => {
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
            <button>Click to view Profile</button>
          </div>
        )
      })}
    </div>
  )
}

export default PageHome
