import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import LoginPage from './pages/loginPage/LoginPage';
import LandingPage from './pages/landingPage/LandingPage';
import LocationPage from './pages/locationPage/LocationPage';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './CSSConst';
import SearchPage from './pages/searchPage/SearchPage';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>

      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginPage}></Route>
          <Route path="/search" exact component={SearchPage}></Route>
          <Route path="/location" exact component={LocationPage}></Route>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
