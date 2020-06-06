import React, {useState} from 'react';
import styles from './CustomCalendarStyle.module.scss'
import dateParser from "../../utils/dateParser";
import generateID from "../../utils/generateID";

const NewEvent = ({modal, handleClose, events, setEvents}) => {
  const {id, box, bounds, start, title, notes, color} = modal.event;
  
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
        notes: data.get('notes'),
        box,
        bounds,
        color: data.get('color')
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
          <input className={styles.NewEvent__Input}
                 name={'title'}
                 type="text"
                 defaultValue={title}/>
        </label>
        <label className={styles.NewEvent__Label}>
          event date
          <input className={[styles.NewEvent__Input, styles.NewEvent__Input_Date].join(' ')}
                 name={'startDate'}
                 type="date"
                 defaultValue={dateParser(start).date}/>
          <i className={["far fa-calendar-alt", styles.NewEvent__Input_Date_Icon].join(' ')}/>
        </label>
        <label className={styles.NewEvent__Label}>
          event time
          <input className={styles.NewEvent__Input}
                 name={'startTime'}
                 type="time"
                 onChange={e => e}
                 defaultValue={dateParser(start).time}/>
          <i className={["far fa-clock", styles.NewEvent__Input_Date_Icon].join(' ')}/>
        </label>
        <label className={styles.NewEvent__Input_Color}>
          <input name={'color'}
                 type="color"
                 defaultValue={color || "#3B86FF"}/>
        </label>
        
        <label className={styles.NewEvent__Label}>
          notes
          <input className={styles.NewEvent__Input}
                 name={'notes'}
                 type="text"
                 defaultValue={notes}/>
        </label>
        <div className={styles.NewEvent__Buttons}>
          <input className={[styles.NewEvent__Button, styles.NewEvent__Button_Cancel].join(' ')}
                 type="reset"
                 value={'Cancel'}
                 onClick={handlerDelete}/>
          <input className={styles.NewEvent__Button}
                 type="submit"
                 value={'Save'}/>
        </div>
      </form>
    </div>
  );
};

export default NewEvent;