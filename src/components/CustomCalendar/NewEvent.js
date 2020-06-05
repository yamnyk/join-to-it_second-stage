import React from 'react';
import styles from './CustomCalendarStyle.module.scss'

const NewEvent = ({coords, setIsShowing: handleClose}) => {
  const positionStyles = {
    position: 'absolute',
    top: coords.y - (275 / 2) + "px",
    left: `${coords.x}px`,
  };
  
  return (
    <div className={styles.NewEvent__Wrap}>
      <form className={styles.NewEvent} style={positionStyles}>
        <i className={["far fa-times-circle", styles.NewEvent__Close].join(' ')} onClick={() => handleClose(false)}/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur, delectus, dolore, eaque earum
        error eum ipsum minima minus perspiciatis rerum sed similique vero voluptates voluptatibus! Consequatur ipsum
        molestiae non!
        <input type="reset" value={'Cancel'} onClick={handleClose}/>
      </form>
    </div>
  );
};

export default NewEvent;