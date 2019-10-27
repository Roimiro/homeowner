import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Messages from './pages/Messages'
import Votings from './pages/Votings'
import NavHeader from './components/navHeader'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      activeUserId : null,
    }
    this.handleActiveUser = this.handleActiveUser.bind(this)
  }
  handleActiveUser(user){
      this.setState({activeUserId:user.id });
  }
  render() {

    const {activeUserId} = this.state;
    return (
      <div>
        <NavHeader activeuser={this.handleActiveUser} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        {/*<Routh path='/dashboardcommitte'>
          <DashboardCommitte />
        </Routh>
        <Route path='/dashboardtenants'>
          <DashboardTenats />
        </Route>
        <Route path='/tenants'>
          <Tenants />
        </Route> */}
        <Route path='/messages'>
          <Messages activeuser={activeUserId}/>
        </Route>
        <Route path='/votings'>
          <Votings activeuser={activeUserId} />
        </Route>
        {/* <Route path='/newvoting'>
          <NewVoting />
        </Route> */}
      </Switch>
      </div>
    )
  }
}
export default App;
