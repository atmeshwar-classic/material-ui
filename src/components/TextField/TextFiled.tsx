import { IconButton, TextField } from '@mui/material';
import React from 'react'
// import { ClearOutlined } from "@mui/icons-material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

type InputProps ={
  id?:string
  label:string
  helperText?:string
  value:string
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void
  variant?: "standard" | "filled" | "outlined" | undefined
  handleClearClick:()=>void
} 

const MuiTextField = (props:InputProps) => {
  const { id,label,helperText,value,onChange,variant,handleClearClick}=props
  return (
    <TextField
            id={id}
            label={label}
            helperText={helperText}
              onChange={onChange}
              variant={variant}
              value={value}
              sx={{
                m: 2,
                margin:"10px 0"
              }}
              fullWidth
              InputProps={{
                endAdornment: (
            <IconButton
              // sx={{ visibility: value ? "visible" : "hidden" }}
              onClick={handleClearClick}
            >
              <HighlightOffIcon/>
            </IconButton>)}}
            />
  )
}

export default MuiTextField