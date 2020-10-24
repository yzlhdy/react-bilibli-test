import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'


import Login from './views/Login'
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
