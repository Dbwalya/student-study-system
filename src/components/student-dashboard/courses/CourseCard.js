import React from 'react'
import './CourseCard.css'

const CourseCard = ({ borderFaint, background, percentage, title, text }) => {
  return (
    <div className='courseCard'>
        <div className='courseCard__cirlce' 
          style={
            { 
              backgroundColor: background,
              border: `5px solid ${borderFaint}`
            }
          }>
          {/* <div className='courseCard__circle-percentage'> */}
            <h3>{ percentage }</h3>
          {/* </div> */}
        </div>
        <h2>{ title }</h2>
        <span>{ text }</span>
    </div>
  )
}

export default CourseCard