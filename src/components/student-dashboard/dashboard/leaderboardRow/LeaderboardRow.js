import React from 'react'
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs'
import './LeaderboardRow.css'

const LeaderboardRow = ({ name, rank, points, background, downArrow }) => {
  return (
    <div className='leaderboardRow' style={{ backgroundColor: background && "#000228" }}>   
            <div className='leaderboardRow__icon'>
              {downArrow ? (
                <BsArrowDownShort style={{ color: '#5b1936'}}/>
              ) :
              (
                <BsArrowUpShort />
              )
              }
                <span>{ rank }</span>
            </div>     
            <span>{name}</span>
            <span>{points}</span>  
    </div>
  )
}

export default LeaderboardRow