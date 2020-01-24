import React from 'react';

const Button = (props) => {
  return(
    <div className="btn btn-light" onClick={props.switchView}>Changer de vue</div>
  )
}

export default Button;
