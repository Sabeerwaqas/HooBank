import React from 'react'
import { Button } from '@mui/material';
import { projectColors } from '../../assets/colors';

const ButtonComp = ({ sx, btnText, btnColor, marginR, textAlign }) => {
  return (
    <Button
      sx={{
        m: 0,
        backgroundColor: "none",
        color: btnColor,
        // display: "block",
        fontSize: "10px",
        textAlign: textAlign,
        textTransform: "capitalize",
        fontSize:"12px",
        width: "auto",
        p: 0,
        m: 0,
        "&:hover": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
        ...sx,

      }}>
      {btnText}
    </Button>
  )
}

export default ButtonComp;