import React from 'react'
import './SidebarRow.css'
import { MdDashboardCustomize } from 'react-icons/md'

const SidebarRow = ({ Icon, title }) => {
  return (
    <div className='sidebarRow'>
        <Icon />
        <span>{ title }</span>
    </div>
  )
}

export default SidebarRow