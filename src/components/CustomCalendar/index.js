import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import './CustomCalendar.scss'

const localizer = momentLocalizer(moment);
function CustomCalendar() {
  const myEventsList = [];
  
  return (
    <div className={'Container'}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default CustomCalendar;
