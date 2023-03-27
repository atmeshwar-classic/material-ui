import {
  Typography,
  Container,
  Checkbox,
  Paper,
  IconButton,
  Button
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const myPaperStyle = {
  display: "flex",
  flexDirection: "column",
  width: "700px",
  maxWidth: "700px",
};
const myContainerStyle = {
  padding: "3rem",
  px: "2rem",
};

const MyPaper = () => {
  return (
    <Paper sx={myPaperStyle}>
      <Container component="main" sx={myContainerStyle}>
        <Typography paragraph align="left" fontSize="1.5rem" fontWeight={700}>
          Heading
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          autoComplete="off"
          onSubmit={() => {}}
        >
          <TextField
            id="firstname"
            name="firstname"
            label="Label"
            variant="outlined"
            placeholder="Input"
            color="primary"
            autoComplete="firstname"
            sx={{ width: "100%" }}
            size="small"
            InputProps={{
              style: { fontSize: "1.5rem" },
              endAdornment: (
                <IconButton onClick={() => {}}>
                  <CancelOutlinedIcon />
                </IconButton>
              ),
            }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          ></TextField>
          <Typography variant="caption" sx={{ display: "block", ml: "12px" }}>
            supporting text
          </Typography>
          <TextField
            id="Label"
            name="Label"
            placeholder="Input"
            label="Label"
            size="small"
            variant="outlined"
            sx={{ width: "100%" }}
            autoComplete="lastname"
            color="primary"
            InputProps={{
              style: { fontSize: "1.5rem" },
              endAdornment: (
                <IconButton onClick={() => {}}>
                  <CancelOutlinedIcon />
                </IconButton>
              ),
            }}
            InputLabelProps={{ style: { fontSize: "1.5rem" } }}
          />
          <Typography variant="caption" sx={{ display: "block", ml: "12px" }}>
            supporting text
          </Typography>
          <Box>
            <Checkbox />
            <Typography sx={{ display: "inline", fontSize: "12px" }}>
              I Agree
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button variant="contained">
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default MyPaper;
