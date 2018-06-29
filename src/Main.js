import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PhoneListContainer from './component/PhoneListContainer'
import PhoneDetailComponent from './component/PhoneDetailComponent'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={PhoneListContainer}/>
      <Route path='/detail/:model' component={PhoneDetailComponent}/>
    </Switch>
  </main>
)

export default Main
