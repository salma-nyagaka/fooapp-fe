
import * as React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import LandingComponent from '../components/landingComponent'
import LoginComponent from '../components/loginComponent'
import OrdersComponent from '../components/ordersComponent'
import AdminComponent from '../components/adminComponent'
import MenuComponent from '../components/menuComponent'
import UserComponent from '../components/userComponent'
import AllUsersComponent from '../components/allUsersComponent'
import AdminMenuComponent from '../components/viewMenusComponent.js'
import FoodComponent from '../components/foodAttendantComponent'
import Cookies from 'universal-cookie';
import PrivateRoute from './PrivateRoute'

const cookies = new Cookies()
const user = cookies.get('role')
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LoginComponent} />
      <PrivateRoute exact path='/menu/items' component={LandingComponent} />
      <PrivateRoute exact path='/orders' component={OrdersComponent} />
      <PrivateRoute exact path='/menu' component={MenuComponent} />
      <PrivateRoute exact path='/attendant' component={FoodComponent} />
      <PrivateRoute exact path='/admin' component={AdminComponent} />
      <PrivateRoute exact path='/users' component={AllUsersComponent} />
      <PrivateRoute exact path='/user' component={UserComponent} />
      <PrivateRoute exact path='/admin/menu' component={AdminMenuComponent} />
      {/* {user === "FOOD_ATTENDANT" ? (
        <Route exact path='/attendant' component={FoodComponent} />) : (
        <Redirect to="/" />
      )} */}



    </Switch>
  </BrowserRouter>
)
export default Routes