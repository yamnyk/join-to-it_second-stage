import React, {useState} from 'react';
import styles from './CustomCalendarStyle.module.scss'
import dateParser from "../../utils/dateParser";

const NewEvent = ({modal, setIsShowing: handleClose, events, setEvents}) => {
  const {box, bounds, start, end} = modal.event,
    [newEvent, setNewEvent] = useState({});
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
    const data = new FormData(e.target);
    
    setEvents([
      ...events,
      {
        title: data.get('title'),
        start: new Date([data.get('startDate'), data.get('startTime')].join(' ')),
        end,
        notes: data.get('notes')
      }
    ]);
    handleClose();
  };
  
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
                 className={styles.NewEvent__Input}/>
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
          <input name={'notes'} type="text"/>
        </label>
        <input type="reset" value={'Cancel'} onClick={handleClose}/>
        <input type="submit" value={'Save'}/>
      </form>
    </div>
  );
};

export default NewEvent;