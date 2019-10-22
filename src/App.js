import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Messages from './pages/Messages'
import Votings from './pages/Votings'

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        {/* <Route path='/signup'>
          <Signup />
        </Route>
        <Routh path='/dashboardcommitte'>
          <DashboardCommitte />
        </Routh>
        <Route path='/dashboardtenants'>
          <DashboardTenats />
        </Route>
        <Route path='/tenants'>
          <Tenants />
        </Route> */}
        <Route path='/messages'>
          <Messages />
        </Route>
        {/* <Route path='/newmessage'>
          <NewMessage />
        </Route> */}
        <Route path='/votings'>
          <Votings />
        </Route>
        {/* <Route path='/newvoting'>
          <NewVoting />
        </Route> */}
      </Switch>
    )
  }
}
export default App;
