import React from 'react';
import { height } from '@mui/system';
import './style.scss';

function CustomizeButton(props) {
  const { children, height, backgroundColor, fontSize, color } = props;
  return (
    <button
      className="button"
      style={{
        borderRadius: `calc(${height} / 2`,
        height,
        backgroundColor,
        fontSize,
        color,
      }}
    >
      {children}
    </button>
  );
}

export default CustomizeButton;
