import React from 'react'
import './list.css'
const List = (props) => {
  return ( 
    <div className="list-container">
      {props.children}
    </div>
  );
}
 
export default List;