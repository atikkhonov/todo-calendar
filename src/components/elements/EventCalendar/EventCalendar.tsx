import { Badge, Calendar } from 'antd'
import { Moment } from 'moment';
import React from 'react'
import { IEvent } from '../../../models/IEvent'
import { formatDate } from '../../../utils/date';
import styles from './EventCalendar.module.scss'

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {

  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = events.filter(event => event.date === formatedDate)  
    return (
      <div>
        {currentDayEvents.map((e, index) => 
          <Badge key={index}>{e.description}</Badge>  
        )}
      </div>
    )
  };
  
  return (
    <Calendar 
      style={styles} 
      dateCellRender={dateCellRender}
    />
  )
}

export default EventCalendar