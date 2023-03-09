import React from 'react'
import './Game.css';

const Game = ({ image, won, remaining, completed }) => {

  return (
    <div className='game'>
        <img src={ image } alt='' />
        <div className='game__right'>
            <h3>Challenges</h3>
            <div className='game__right-stats'>
                <div className='game__stats-info'>
                    <span>Won</span>
                    <h3>{ won }</h3>
                </div>
                <div className='game__stats-info'>
                    <span>Remaining</span>
                    <h3>{ remaining }</h3>
                </div>
                <div className='game__stats-info'>
                    <span>Completed</span>
                    <h3>{ completed }</h3>
                </div>
            </div>
            <button>Complete a Challenge</button>
        </div>
    </div>
  )
}

export default Game