import React from 'react';
import './home-wrapper.css'

const HomeWrapper = (props) => {
  return ( 
    <div className="wrapper">
      {props.children}
    </div>
   );
}
 
export default HomeWrapper;