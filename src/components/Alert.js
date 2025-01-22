import React from 'react';
import './component.css';

function Alert(props) {
  return (
    <div style={{height:'50px'}} className={`body bg-${props.mode}`}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong></strong>{props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert
