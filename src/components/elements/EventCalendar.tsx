import { Calendar } from 'antd'
import React from 'react'
import { IEvent } from '../../models/IEvent'

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = () => {
  return (
    <Calendar/>
  )
}

export default EventCalendar