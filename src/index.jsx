import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App';


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
      main: '#748ce4'
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

