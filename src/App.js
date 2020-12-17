import React from 'react';

import {ThemeProvider, createMuiTheme} from '@material-ui/core';

import Home from './pages/Home';
import Contact from './pages/Contact';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f9423a'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
  );
}

export default App;
