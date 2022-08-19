import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App';

/////////
//Constante encargada de guardar una nueva paleta de colores para ser utilizada dentro del proyecto.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a386d',
    },
    textButton: {
      main: '#FFFFFF',
    },
    buttonColor: {
      main: '#4161de'
    },
    buttonSecontaryColor: {
      main: '#4060e1'
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

