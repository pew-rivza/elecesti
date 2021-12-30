import React from 'react';
import AddPositionForm from "./components/AddPositionForm";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {themeOptions} from "./theme";

const theme = createTheme(themeOptions);

function App() {
  return (
      <ThemeProvider theme={theme}>
        <AddPositionForm/>
      </ThemeProvider>
  );
}

export default App;
