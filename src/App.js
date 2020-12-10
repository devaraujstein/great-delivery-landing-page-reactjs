import React from 'react';

import {ThemeProvider, createMuiTheme} from '@material-ui/core';

import Home from './pages/Home';

const theme = createMuiTheme({
  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
