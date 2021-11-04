 
import * as React from 'react'
import { Route, Switch,  BrowserRouter} from 'react-router-dom'
import landingPage from '../components/landingPage'

const Routes = () => (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={landingPage} />
    </Switch>
  </BrowserRouter>
)
export default Routes