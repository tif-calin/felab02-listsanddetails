import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ListPage from '../../containers/ListPage';
import DetailPage from '../../containers/DetailPage';

export default function App() {
  return <BrowserRouter className="App">
    <main>
      <Switch>

        <Route exact path="/" 
          render={() => <Redirect to="/list" />}
        />

        <Route exact path="/list" render={routerProps => (
          <ListPage {...routerProps} />
        )} />

        <Route exact path="/list/:coreId" render={routerProps => (
          <DetailPage {...routerProps} />
        )} />

        <Redirect to="/" />

      </Switch>
    </main>
  </BrowserRouter>;
}
