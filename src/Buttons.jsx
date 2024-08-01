import React from 'react'
import { InboxIcon, DayCalendarIcon, WeekCalendarIcon } from './assets/Icons'
import { Link } from 'react-router-dom';

const Buttons = () => {
  return (
    <ul className ="buttons">
      <li>
        <span className = "sb-item">
          <Link to = "/inbox">
            <InboxIcon className="icon"/>
            Inbox
          </Link>
        </span>
      </li>
      <li>
        <span className = "sb-item">
          <Link to = "/today">
            <DayCalendarIcon className="icon"/>
            Today
          </Link>
        </span>
      </li>
      <li>
        <span className = "sb-item">
          <Link to = "/this-week">
            <WeekCalendarIcon className="icon"/>
            This Week
          </Link>
        </span>
      </li>
      
    </ul>
  )
}

export default Buttons