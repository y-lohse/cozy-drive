import React from 'react'
import { Router, Route } from 'react-router'

import Layout from '../drive/components/Layout'
import Settings from '../drive/mobile/components/Settings'

import Authentication from './Authentication'
import RevokableWrapper from './RevokableWrapper'
import { resetClient, initBar } from './lib/client'

const AUTH_PATH = 'authentication'

const redirectToAuth = (isAuthenticated) => (nextState, replace) => {
  if (!isAuthenticated()) {
    resetClient()
    replace({
      pathname: `/${AUTH_PATH}`
    })
  }
}

const afterAuthentication = (onAuthenticatedCallback, router) => (url, client, token) => {
  onAuthenticatedCallback(url, client, token, router)
}

const MobileRouter = ({ router, history, appRoutes, isAuthenticated, isRevoked, allowRegistration, onAuthenticated }) => (
  <Router history={history}>
     <Route>
      <Route onEnter={redirectToAuth(isAuthenticated)} component={() => <RevokableWrapper revoked={isRevoked()} />}>
        {appRoutes}
        <Route component={Layout}>
          <Route path='settings' name='mobile.settings' component={Settings} />}
        </Route>
      </Route>
      <Route path={AUTH_PATH} component={() => <Authentication allowRegistration={allowRegistration} onComplete={afterAuthentication(onAuthenticated, router)} />} onLeave={() => initBar()} />
    </Route>
  </Router>
)

export default MobileRouter
