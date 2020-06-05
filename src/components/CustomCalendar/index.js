import React, {useState} from 'react';
import moment from 'moment';
import './CalendarDefStyles.scss';
import styles from './CustomCalendarStyle.module.scss';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import './CalendarDefStyles.scss';
import NewEvent from "./NewEvent";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);


function CustomCalendar() {
  const [events, setEvents] = useState([]),
    [modal, setModal] = useState({isShowing: false});
  
  const handleCloseModal = () => {
    setModal({...modal, isShowing: false})
  };
  
  const handleSelect = (event) => {
    setModal({
      isShowing: true,
      event,
    });
  };
  
  return (
    <div className={'Container'}>
      <h2 className={styles.Calendar__Title}>Calendar</h2>
      
      <div className={styles.Calendar__Wrapper}>
        {
          modal.isShowing && <NewEvent
            modal={{...modal}}
            handleClose={handleCloseModal}
            events={[...events]}
            setEvents={setEvents}
          />
        }
        <DnDCalendar
          selectable
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelect}
          onSelectSlot={handleSelect}
          style={{height: 500}}
        />
      </div>
    </div>
  );
}

export default CustomCalendar;
