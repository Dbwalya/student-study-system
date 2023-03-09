import React from 'react'
import './AnnouncementRow.css'
import { BsArrowRightShort } from 'react-icons/bs'

const AnnouncementRow = ({ title, text, color }) => {
  return (
    <div className='announcementRow'>
        <div className='announcementRow__left'>
            <h3
              style={{ color: color }}
            >{ title }</h3>
            <span>{ text }</span>
        </div>
        <BsArrowRightShort className='announcements__arrowIcon' style={ {backgroundColor: color}}/>
    </div>
  )
}

export default AnnouncementRow