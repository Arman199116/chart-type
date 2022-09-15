import React from "react";

const Span : React.FC<any> = ({changeDay, dayName, day, active, arr}) => {
   
console.log('act ', arr);

    return (
        <span className={active}  onClick={ e => changeDay(arr, day)}>{dayName}</span> 
    )
}

export default Span;