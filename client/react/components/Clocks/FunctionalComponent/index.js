import React, { useState, useEffect } from 'react';
import { pipe } from 'lodash/fp';


function twoDigits(value){
  console.log( value )
  const valueString = `${value}`;

  return valueString.length < 2 ? `0${valueString}`: `${valueString}`;
}

function getTime(){
  const 
    time = new Date(),
    hours   = pipe( () => time.getHours(),   twoDigits )(),
    minutes = pipe( () => time.getMinutes(), twoDigits )(),
    seconds = pipe( () => time.getSeconds(), twoDigits )();

  return `${hours}:${minutes}:${seconds}`
}

export default function FunctionalClockComponent(){

  const [ time, setTime ] = useState( getTime() );

  function tick(){ setTime( getTime() ) }

  useEffect( () => {
    const timerId = setInterval( () => tick(), 1000 );
    return function cleanUp(){
      clearInterval( timerId );
    }
  })

  return (
    <div style={ { textAlign: "center"} }>{ time }</div>
  )

}