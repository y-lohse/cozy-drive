import React from 'react'
import { Router, Route } from 'react-router'

import Layout from '../drive/components/Layout'
import Settings from '../drive/mobile/components/Settings'

import Authentication from './Authentication'
import RevokableWrapper from './RevokableWrapper'
import { resetClient } from './lib/client'

const AUTH_PATH = 'authentication'

const redirectToAuth = (isAuthenticated, router) => (nextState, replace) => {
  if (!isAuthenticated()) {
    resetClient()
    replace({
      pathname: `/${AUTH_PATH}`
    })
  }
}

const MobileRouter = ({ router, history, appRoutes, isAuthenticated, isRevoked, allowRegistration, onAuthenticated }) => (
  <Router history={history}>
     <Route>
      <Route onEnter={redirectToAuth(isAuthenticated, router)} component={(props) => <RevokableWrapper {...props} revoked={isRevoked()} />}>
        {appRoutes}
        <Route component={Layout}>
          <Route path='settings' name='mobile.settings' component={Settings} />
        </Route>
      </Route>
      <Route path={AUTH_PATH} component={(props) => <Authentication {...props} allowRegistration={allowRegistration} onComplete={onAuthenticated} />} />
    </Route>
  </Router>
)

export default MobileRouter
