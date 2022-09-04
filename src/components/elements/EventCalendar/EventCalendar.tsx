import React from 'react'
import { Moment } from 'moment';

import { Calendar } from 'antd'
import styles from './EventCalendar.module.scss'

import { IEvent } from '../../../models/IEvent'
import { formatDate } from '../../../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {

  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter(event => event.date === formatedDate)  
    
    return (
      <ul>
        {currentDayEvents.map((e, index) => 
          <li key={index}>{e.description}</li>  
        )}
      </ul>
    )
  };
  
  return (
    <>
      <Calendar 
        style={styles} 
        dateCellRender={dateCellRender}
      />
    </>
  )
}

export default EventCalendar