import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApplicationPage from "./pages/ApplicationPage";
import CreateTripPage from "./pages/CreateTripPage";
import TripDetailPage from "./pages/TripDetailPage";
import TripsListPage from "./pages/TripsListPage";
import LoginPage from "./pages/LoginPage";
import styled from "styled-components";
import { CssBaseline } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

const App = () => {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <CssBaseline/>
      <AppContainer>
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/viagens/detalhe/:tripId">
            <TripDetailPage/>
          </Route>
          <Route path="/viagens/criar">
            <CreateTripPage/>
          </Route>
          <Route path="/viagens">
            <TripsListPage/>
          </Route>
          <Route path="/inscricao">
            <ApplicationPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </AppContainer>
      </MuiPickersUtilsProvider>

    </Router>
  );
}

export default App