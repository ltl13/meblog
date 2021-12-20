import React from 'react';
import { height } from '@mui/system';
import './style.scss';

function CustomizeButton(props) {
  const {
    children,
    height,
    width,
    backgroundColor,
    fontSize,
    color,
    variant,
    ...other
  } = props;

  const getVariant = variant => {
    if (variant !== 'filled' && variant !== 'outlined') {
      return 'none';
    } else {
      return variant;
    }
  };

  return (
    <button
      className={getVariant(variant)}
      style={{
        borderRadius: `calc(${height} / 2`,
        height,
        width,
        backgroundColor,
        fontSize,
        color,
      }}
      {...other}
    >
      {children}
    </button>
  );
}

export default CustomizeButton;
