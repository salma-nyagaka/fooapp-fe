 
import * as React from 'react'
import { Route, Switch,  BrowserRouter} from 'react-router-dom'
import landingPage from '../components/landingPage'
import loginPage from '../components/loginPage'
import pastOrdersPage from '../components/pastOrdersPage'

const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={landingPage} />
      <Route exact path='/login' component={loginPage} />
      <Route exact path='/orders' component={pastOrdersPage} />

    </Switch>
  </BrowserRouter>
)
export default Routes