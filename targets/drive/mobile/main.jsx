/* global __DEVELOPMENT__ */
import 'babel-polyfill'

import 'drive/styles/main'
import 'drive/mobile/styles/main'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'

import { I18n } from 'cozy-ui/react/I18n'

import MobileRouter from 'authentication/MobileRouter'
import AppRoute from 'drive/components/AppRoute'

import configureStore from 'drive/mobile/store/configureStore'
import { loadState } from 'drive/mobile/store/persistedState'
import { initServices, getLang } from 'drive/mobile/lib/init'
import { startBackgroundService } from 'drive/mobile/lib/background'
import { startTracker, useHistoryForTracker, startHeartBeat, stopHeartBeat } from 'drive/mobile/lib/tracker'
import { pingOnceADay } from 'drive/mobile/actions/timestamp'
import { backupImages } from 'drive/mobile/actions/mediaBackup'
import { backupContacts } from 'drive/mobile/actions/contactsBackup'
import { setUrl, saveCredentials } from 'drive/mobile/actions/settings'

if (__DEVELOPMENT__) {
  // Enables React dev tools for Preact
  // Cannot use import as we are in a condition
  require('preact/devtools')

  // Export React to window for the devtools
  window.React = React
}

const renderAppWithPersistedState = persistedState => {
  const store = configureStore(persistedState)

  initServices(store)

  function isAuthorized () {
    return !store.getState().mobile.settings.authorized
  }

  function isRevoked () {
    return store.getState().mobile.authorization.revoked
  }

  function saveCredentials (url, client, token, router) {
    store.dispatch(setUrl(url))
    store.dispatch(setUrl(client, token))
    router.replace('/')
  }

  function pingOnceADayWithState () {
    const state = store.getState()
    if (state.mobile) {
      const timestamp = state.mobile.timestamp
      const analytics = state.mobile.settings.analytics
      store.dispatch(pingOnceADay(timestamp, analytics))
    }
  }

  document.addEventListener('pause', () => {
    if (store.getState().mobile.settings.analytics) stopHeartBeat()
  }, false)

  document.addEventListener('resume', () => {
    pingOnceADayWithState()
    if (store.getState().mobile.settings.analytics) startHeartBeat()
  }, false)

  document.addEventListener('deviceready', () => {
    pingOnceADayWithState()
    store.dispatch(backupImages())
    if (navigator && navigator.splashscreen) navigator.splashscreen.hide()
    if (store.getState().mobile.settings.backupContacts) store.dispatch(backupContacts())
  }, false)

  useHistoryForTracker(hashHistory)
  if (store.getState().mobile.settings.analytics) startTracker(store.getState().mobile.settings.serverUrl)

  const root = document.querySelector('[role=application]')

  render((
    <I18n lang={getLang()} dictRequire={(lang) => require(`drive/locales/${lang}`)}>
      <Provider store={store}>
        <MobileRouter
          history={hashHistory}
          appRoutes={AppRoute}
          isAuthenticated={isAuthorized}
          isRevoked={isRevoked}
          allowRegistration={false}
          onAuthenticated={saveCredentials}
        />
      </Provider>
    </I18n>
  ), root)
}

// Allows to know if the launch of the application has been done by the service background
// @see: https://git.io/vSQBC
const isBackgroundServiceParameter = () => {
  let queryDict = {}
  location.search.substr(1).split('&').forEach(function (item) { queryDict[item.split('=')[0]] = item.split('=')[1] })

  return queryDict.backgroundservice
}

document.addEventListener('DOMContentLoaded', () => {
  if (!isBackgroundServiceParameter()) {
    loadState().then(renderAppWithPersistedState)
  }
}, false)

document.addEventListener('deviceready', () => {
  if (isBackgroundServiceParameter()) {
    startBackgroundService()
  }
}, false)
