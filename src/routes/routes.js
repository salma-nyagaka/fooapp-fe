 
import * as React from 'react'
import { Route, Switch,  BrowserRouter} from 'react-router-dom'
import LandingComponent from '../components/landingComponent'
import LoginComponent from '../components/loginComponent'
import OrdersComponent from '../components/ordersComponent'
import adminComponent from '../components/adminComponent'
import MenuComponent  from '../components/menuComponent'
import UserComponent from '../components/userComponent'
import AllUsersComponent from '../components/allUsersComponent'
import AdminMenuComponent from '../components/viewMenusComponent.js'
import FoodComponent from '../components/foodAttendantComponent'
import PrivateRoute  from './PrivateRoute'
const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingComponent} />
      <Route exact path='/login' component={LoginComponent} />
      <Route exact path='/orders' component={OrdersComponent} />
      <PrivateRoute exact path='/admin' component={adminComponent} />
      <PrivateRoute exact path='/menu' component={MenuComponent} />
      <PrivateRoute exact path='/user' component={UserComponent} />
      <PrivateRoute exact path='/users' component={AllUsersComponent} />
      <PrivateRoute exact path='/admin/menu' component={AdminMenuComponent} />
      <PrivateRoute exact path='/attendant' component={FoodComponent} />

    </Switch>
  </BrowserRouter>
)
export default Routes