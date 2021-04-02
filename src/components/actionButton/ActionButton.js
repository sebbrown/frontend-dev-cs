import React from 'react';

function ActionButton(props) {
  return (
    <button onClick={() => props.handleClick()}>Go</button>
  );
}

export default ActionButton;