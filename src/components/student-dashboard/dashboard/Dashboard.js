import React from 'react'
import Game from '../challenges/Game'
import CourseCard from '../courses/CourseCard'
import AnnouncementRow from './announcements-row/AnnouncementRow'
import './Dashboard.css'
import LeaderboardRow from './leaderboardRow/LeaderboardRow'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='dashboard__header'>
            <div className='dashboard__student-courseCards'>
                <CourseCard borderFaint='#1b1875;' background="#332ca2" percentage='50%' title='Maths' text="3 tests remaining"/>
                <CourseCard borderFaint='#1b1875;' background="#705693" percentage='78%' title='Science' text="Unit almost completed"/>
                <CourseCard borderFaint='#1b1875;' background="#b0407f" percentage='75%' title='English'text="2 tests remaining"/>
                <CourseCard borderFaint='#1b1875;' background="#13b6b5" percentage='50%' title='Social Science'text="3 tests remaining"/>
                <CourseCard borderFaint='#1b1875;' background="#cd7432" percentage='25%' title='German' text="3 tests remaining"/>
            </div>
            </div>
            <div className='dashboard__cards-challenges'>
              <Game  
                    image='https://i.pinimg.com/564x/cb/f0/dc/cbf0dc4cba9ec29ff06f8fc6e8802420.jpg' 
                    won='15' 
                    remaining='08' 
                    completed='18'
                />
              <Game  
                    image='https://i.pinimg.com/564x/ac/12/cf/ac12cf7656db18024bde44f16b15d513.jpg'
                    won='10' 
                    remaining='05' 
                    completed='20'/>
            </div>
            <div className='dashboard__body'>
                <div className='dashboard__body-announcements'>
                  <h3>Announcements</h3>
                    <div className='dashboard__announcements-data'>
                         <AnnouncementRow color="#4e48da" title='Maths' text='Final assigment due in 23/01/2022'/>
                         <AnnouncementRow color="#44a6c8" title='Science' text='Frankie climbed the leaderboard to 3rd place, challenge them'/>
                         <AnnouncementRow color="#b67859" title='German' text='Result to be out in two days.'/>
                    </div>
                </div>
                <div className='dashboard__body-leaderboard'>
                  <h3>Leaderboard</h3>
                      <div className='dashboard__leaderboard-header'>
                        <span>Rank</span>
                        <span>Name</span>
                        <span>Points</span>
                      </div>
                      <LeaderboardRow rank='01' name="Rahul Luthers" points="45"/>
                      <LeaderboardRow rank='02' name="Jess Middletonn" points="42" background/>
                      <LeaderboardRow rank='03' name="Dan Sparks" points="39" downArrow redArrow />
                      <LeaderboardRow rank='04' name="Medha Kalie" points="35"  downArrow background  redArrow />
                      <LeaderboardRow rank='05' name="Jed" points="30"/>
                </div>
            </div>
        
    </div>
  )
}

export default Dashboard