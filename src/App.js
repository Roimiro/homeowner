import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

class App extends React.Component {
  render (){
    return(
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Routh path='/dashboardcommitte'>
          <DashboardCommitte/>
        </Routh>
        <Route path='/dashboardtenants'>
          <DashboardTenats/>
        </Route>
        <Route path='/tenants'>
        <Tenants/>
        </Route>
        <Route path='/messages'>
          <Messages/>
        </Route>
        <Route path='/newmessage'>
          <NewMessage/>
        </Route>
        <Routh path='/votings'>
          <Votings/>
        </Routh>
        <Routh path='/newvoting'>
          <NewVoting/>
        </Routh>
      </Switch>
    )
  }
}
export default App;
