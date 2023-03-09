import { Verified } from '@mui/icons-material'
import { Avatar } from '@mui/material';
import { AiFillStar } from 'react-icons/ai'
import { BsPlusCircle } from 'react-icons/bs'
import SidebarRow from './sidebar-row/SidebarRow';
import { MdDashboardCustomize } from 'react-icons/md'
import { FaReact } from 'react-icons/fa'
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { BsClipboard } from 'react-icons/bs'

import './sidebar.css'

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className='sidebar__header'>
                <Avatar sx={ {height: 100, width: 100} } 
                    src='https://i.pinimg.com/564x/78/97/67/78976741e2e594513d0ec7edfc5b1392.jpg'
                />
                <BsPlusCircle className='plus-icon'/>
                <div className='sidebar__header-userInfo'>
                    <h3>Rahul Luthra <Verified /></h3>
                    <span><AiFillStar /> Star Student</span>
                </div>
            </div>
            <div className='sidebar__student-ranking'>
                <div className='sidebar__ranking-left'>
                    <span>Rank</span>
                    <h2>03</h2>
                </div>
                <div className='sidebar__ranking-right'>
                    <span>Total points</span>
                    <h2>443</h2>
                </div>
            </div>
            <div className='sidebar__options'>
                <SidebarRow Icon = { MdDashboardCustomize } title ="Dashboard" />
                <SidebarRow Icon = { FaReact } title ="Complete a quiz" />
                <SidebarRow Icon = { AiFillCopyrightCircle } title ="Challenge classmate" />
                <SidebarRow Icon = { BsFillMicFill } title ="Announcements" />
                <SidebarRow Icon = { BsClipboard } title ="Leaderboard" />
            </div>
            
            <span>Courseboard</span>
        </div>
    )
}

export default Sidebar