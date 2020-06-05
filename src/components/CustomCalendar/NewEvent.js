import React, {useState} from 'react';
import styles from './CustomCalendarStyle.module.scss'

const NewEvent = ({modal, setIsShowing: handleClose, events, setEvents}) => {
  const {box, bounds, start, end} = modal.event,
    [newEvent, setNewEvent] = useState({});
  let coords = {...box};
  
  if (bounds) {
    coords = {
      clientY: bounds.top,
      clientX: bounds.left
    };
    console.log(coords);
  }
  
  const positionStyles = {
    position: 'absolute',
    top: coords.clientY + "px",
    left: `${coords.clientX - 260}px`,
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setEvents([
      ...events,
      {
        start,
        end,
        title: 'Unnamed',
      },
    ]);
    handleClose();
  };
  
  const nameChangeHandler = e => setNewEvent({...newEvent, title: e.target.value});
  const startDateChangeHandler = e => setNewEvent({...newEvent, title: e.target.value});
  const endDateChangeHandler = e => setNewEvent({...newEvent, title: e.target.value});
  
  return (
    <div className={styles.NewEvent__Wrap}>
      <form
        onSubmit={handleSubmit}
        className={styles.NewEvent}
        style={positionStyles}>
        <i className={["far fa-times-circle", styles.NewEvent__Close].join(' ')} onClick={() => handleClose(false)}/>
        <label className={styles.NewEvent__Label}>
          event name
          <input type="text"
                 className={styles.NewEvent__Input}/>
          <input type="datetime-local"/>
          <input type="datetime-local"/>
        </label>
        <input type="reset" value={'Cancel'} onClick={handleClose}/>
        <input type="submit" value={'Save'}/>
      </form>
    </div>
  );
};

export default NewEvent;