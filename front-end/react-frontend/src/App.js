import './App.css';
import Login from '../src/components/Login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Registration from '../src/components/registration'
import RegistrationConfirmed from './components/registrationConfimed';
import Home from '../src/components/Home'
import UserList from './components/UserList';

function App() {
  return (
    
      <BrowserRouter>
          <Switch>
            <Route exact path = '/' component = {Login}></Route>
            <Route exact path = '/registration' component = {Registration}></Route>
            <Route exact path = '/registrationConfirmed' component = {RegistrationConfirmed}></Route>
            <Route exact path = '/home' component = {Home}></Route>
            <Route exact path = '/teste' component = {UserList}></Route>
            
          </Switch>
      </BrowserRouter>
    
  );
}

export default App;
