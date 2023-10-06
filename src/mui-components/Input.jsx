import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Input = () => {
  return (
    <Box
      component="form"
      sx={{
        backgroundColor: "white",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
};
