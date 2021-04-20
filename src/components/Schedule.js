import React from 'react';

function Schedule(props){
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <h4>{props.location}</h4>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </React.Fragment>
  );
}

export default Schedule;