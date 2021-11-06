 
import * as React from 'react'
import { Route, Switch,  BrowserRouter} from 'react-router-dom'
import LandingComponent from '../components/landingComponent'
import loginPage from '../components/loginPage'
import OrdersComponent from '../components/ordersComponent'
import adminComponent from '../components/adminComponent'
import MenuComponent  from '../components/menuComponent'
import UserComponent from '../components/userComponent'
import AllUsersComponent from '../components/allUsersComponent'
import AdminMenuComponent from '../components/viewMenusComponent.js'

const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingComponent} />
      <Route exact path='/login' component={loginPage} />
      <Route exact path='/orders' component={OrdersComponent} />
      <Route exact path='/admin' component={adminComponent} />
      <Route exact path='/menu' component={MenuComponent} />
      <Route exact path='/user' component={UserComponent} />
      <Route exact path='/users' component={AllUsersComponent} />
      <Route exact path='/admin/menu' component={AdminMenuComponent} />
    </Switch>
  </BrowserRouter>
)
export default Routes