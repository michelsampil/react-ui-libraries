import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

export const MUISectionWithTheme = () => {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#9D00FF",
      },
      secondary: {
        main: "#7d12ff",
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Button variant="contained" color="primary">
        Button with theme 😎{" "}
      </Button>
    </ThemeProvider>
  );
};
