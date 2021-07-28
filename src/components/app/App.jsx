import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return <Router>
    <main>
      <Switch>

        <Route exact path="/" 
          render={() => <Redirect to="/list" />}
        />

        {/*
        <Route exact path="/list" render={routerProps => (
          <ListPage {...routerProps} />
        )}/>

        <Route exact path="/list/:id" render={routerProps => (
          <DetailPage {...routerProps} />
        )}/>
        */}

        <Redirect to="/" />

      </Switch>
    </main>
  </Router>;
}
