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
    const {start, end, box} = event;
    console.log(event.box);
    setModal({
      isShowing: true,
      coords: {...box}
    });
    // const title = window.prompt('New Event name');
    // if (title)
      setEvents([
        ...events,
        {
          start,
          end,
          // title,
        },
      ])
  };
  
  return (
    <div className={'Container'}>
      <h2 className={styles.Calendar__Title}>Calendar</h2>
      
      <div className={styles.Calendar__Wrapper}>
        {
          modal.isShowing && <NewEvent coords={modal.coords} setIsShowing={handleCloseModal}/>
        }
        <DnDCalendar
          selectable
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={() => console.log('you selected teh event')}
          onSelectSlot={handleSelect}
          style={{height: 500}}
        />
      </div>
    </div>
  );
}

export default CustomCalendar;
