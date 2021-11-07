
import * as React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import LandingComponent from '../components/landingComponent'
import LoginComponent from '../components/loginComponent'
import OrdersComponent from '../components/ordersComponent'
import adminComponent from '../components/adminComponent'
import MenuComponent from '../components/menuComponent'
import UserComponent from '../components/userComponent'
import AllUsersComponent from '../components/allUsersComponent'
import AdminMenuComponent from '../components/viewMenusComponent.js'
import FoodComponent from '../components/foodAttendantComponent'
import Cookies from 'universal-cookie';

const cookies = new Cookies()
const user = cookies.get('role')
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingComponent} />
      <Route exact path='/login' component={LoginComponent} />
      <Route exact path='/orders' component={OrdersComponent} />
      <Route exact path='/menu' component={MenuComponent} />
      <Route exact path='/attendant' component={FoodComponent} />
      {/* {user === "FOOD_ATTENDANT" ? (
        <Route exact path='/attendant' component={FoodComponent} />) : (
        <Redirect to="/" />
      )} */}
      {user === "ADMIN" ? (
        <Route exact path='/admin' component={adminComponent} />) : (
        <Redirect to="/" />
      )}
      {user === "ADMIN" ? (
        <Route exact path='/users' component={AllUsersComponent} />) : (
        <Redirect to="/" />
      )}
      {user === "ADMIN" ? (
        <Route exact path='/user' component={UserComponent} />
      ) : (
        <Redirect to="/" />
      )}
      {user === "ADMIN" ? (
        <Route exact path='/admin/menu' component={AdminMenuComponent} />) : (
        <Redirect to="/" />
      )}
  


    </Switch>
  </BrowserRouter>
)
export default Routes