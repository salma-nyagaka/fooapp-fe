 
import * as React from 'react'
import { Route, Switch,  BrowserRouter} from 'react-router-dom'
import landingPage from '../components/landingPage'
import loginPage from '../components/loginPage'
import pastOrdersPage from '../components/pastOrdersPage'
import adminPage from '../components/adminPage'
import MenuComponent  from '../components/menuComponent'
import UserComponent from '../components/userComponent'
import AllUsersComponent from '../components/allUsersComponent'
import AdminMenuComponent from '../components/viewMenusComponent.js'

const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={landingPage} />
      <Route exact path='/login' component={loginPage} />
      <Route exact path='/orders' component={pastOrdersPage} />
      <Route exact path='/admin' component={adminPage} />
      <Route exact path='/menu' component={MenuComponent} />
      <Route exact path='/user' component={UserComponent} />
      <Route exact path='/users' component={AllUsersComponent} />
      <Route exact path='/admin/menu' component={AdminMenuComponent} />
    </Switch>
  </BrowserRouter>
)
export default Routes