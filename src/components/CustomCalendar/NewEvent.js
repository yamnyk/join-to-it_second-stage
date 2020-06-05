import React, {useState} from 'react';
import styles from './CustomCalendarStyle.module.scss'
import dateParser from "../../utils/dateParser";
import generateID from "../../utils/generateID";

const NewEvent = ({modal, handleClose, events, setEvents}) => {
  const {id, box, bounds, start, title, notes} = modal.event;
  
  let coords = {...box};
  if (bounds) {
    coords = {
      clientY: bounds.top,
      clientX: bounds.left
    };
  }
  
  const positionStyles = {
    position: 'absolute',
    top: coords.clientY + "px",
    left: `${coords.clientX - 260}px`,
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target),
      dateStart = new Date([data.get('startDate'), data.get('startTime')].join(' ')),
      dateEnd = new Date(dateStart),
      formDataObj = {
        title: data.get('title'),
        start: dateStart,
        end: dateEnd,
        notes: data.get('notes')
      };
    
    dateEnd.setHours(dateEnd.getHours() + 1);
    
    let newEvent = {};
    const eventFromStorage = events.find(e => e.id === id);
    
    if (!eventFromStorage) {
      newEvent = {
        id: generateID('event_'),
        ...formDataObj
      };
    } else {
      newEvent = {
        ...eventFromStorage,
        ...formDataObj
      }
      events.splice(events.indexOf(eventFromStorage), 1);
    }
    setEvents([
      ...events,
      newEvent
    ]);
    handleClose();
  };
  
  const handlerDelete = () => {
    const selectedEvent = events.find(ev => ev.id === id),
      eventsCopy = [...events];
    
    eventsCopy.splice(events.indexOf(selectedEvent), 1)
    
    setEvents(eventsCopy);
    handleClose();
  }
  
  return (
    <div className={styles.NewEvent__Wrap}>
      <form
        onSubmit={e => handleSubmit(e)}
        className={styles.NewEvent}
        style={positionStyles}>
        
        <i className={["far fa-times-circle", styles.NewEvent__Close].join(' ')} onClick={() => handleClose(false)}/>
        
        <label className={styles.NewEvent__Label}>
          event name
          <input name={'title'} type="text"
                 className={styles.NewEvent__Input} defaultValue={title}/>
        </label>
        <label>
          event date
          <input name={'startDate'}
                 type="date"
                 defaultValue={dateParser(start).date}/>
        </label>
        <label>
          event end
          <input name={'startTime'}
                 type="time"
                 onChange={e => e}
                 defaultValue={dateParser(start).time}/>
        </label>
        <label>
          notes
          <input name={'notes'} type="text" defaultValue={notes}/>
        </label>
        <input type="reset" value={'Cancel'} onClick={handlerDelete}/>
        <input type="submit" value={'Save'}/>
      </form>
    </div>
  );
};

export default NewEvent;