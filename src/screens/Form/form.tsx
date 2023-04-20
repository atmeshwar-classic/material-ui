import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import MuiTextField from "../../components/TextField/TextFiled";


const Form = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [checked, setChecked] = useState(false);
  const theme:any = useTheme()

  const style = {
    container: {
      padding: "40px",
      display: "grid",
      placeItems: "center",
    },
    heading: {
      margin: "10px 0px",
      fontSize: "30px",
    },
    btnPrimary: {
      margin: "0px 10px",
      borderRadius: "100px",
      width: "97px",
      height: "40px",
      display:"block",

    },
    checkboxStyle:{
      color:theme.palette.common.black,
      display:"block"
    }
  };

  const handleClearClick = () => {
    setValue("");
  };
  const handleClearClick2 = () => {
    setValue2("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(e.target.value);
  };
  const handleCheckBoxChange = () => {
    setChecked(!checked);
  };
  return (
    <Container sx={style.container}>
      <Paper elevation={3} sx={{ maxWidth: "700px", padding: "20px" }}>
        <form>
          <Typography variant='h4' color='common.black' sx={style.heading}>
            Heading
          </Typography>
          <MuiTextField
            id='outlined-input1'
            label='Input'
            value={value}
            helperText='Extra text'
            onChange={onChange}
            handleClearClick={handleClearClick}
          />
          <MuiTextField
            id='outlined-input2'
            label='Input'
            value={value2}
            helperText='Extra text'
            onChange={onChange2}
            handleClearClick={handleClearClick2}
          />
          <FormControlLabel
          sx={style.checkboxStyle}
            control={
              <Checkbox checked={checked} onChange={handleCheckBoxChange} />
            }
            label='I Agree'
          />
          <Box sx={{float:"right"}}>
          <Button sx={style.btnPrimary} color='primary' variant='contained'>
            Login
          </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
