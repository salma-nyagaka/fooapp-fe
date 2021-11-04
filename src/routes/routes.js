 
import * as React from 'react'
import { Route, Switch,  BrowserRouter} from 'react-router-dom'
import landingPage from '../components/landingPage'
import loginPage from '../components/loginPage'

const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={landingPage} />
      <Route exact path='/login' component={loginPage} />

    </Switch>
  </BrowserRouter>
)
export default Routes