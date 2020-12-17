import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {ThemeProvider, createMuiTheme} from '@material-ui/core';

import Home from './pages/Home';
import Contact from './pages/Contact';
import WorkWithUs from './pages/WorkWithUs';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f9423a'
    }
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={WorkWithUs} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
