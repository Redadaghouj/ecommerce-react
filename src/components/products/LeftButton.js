import React from 'react';
import prev from '../../assets/images/next.png';

function LeftButton(onClick, onDisable) {
  return (
    <img
      src={prev}
      alt=''
      width='35px'
      onClick={onClick}
      onDisable={onDisable}
      height='35px'
      style={{ float: 'left', marginTop: '220px', cursor: 'pointer' }}
    />
  );
}

export default LeftButton;
