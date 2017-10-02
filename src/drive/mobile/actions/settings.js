/* global cozy */

import { initClient } from '../lib/cozy-helper'
import { startReplication as startPouchReplication } from '../lib/replication'
import { setClient, setFirstReplication } from '../../actions/settings'
import { getDeviceName } from '../lib/device'
import { openFolder, getOpenedFolderId } from '../../actions'
import { REGISTRATION_ABORT, onRegistered } from '../lib/registration'
import { logException, logInfo, configure as configureReporter } from '../lib/reporter'
import { startTracker, stopTracker } from '../lib/tracker'
import { pingOnceADay } from './timestamp'
import { revokeClient as reduxRevokeClient } from './authorization'

export const SET_URL = 'SET_URL'
export const BACKUP_IMAGES = 'BACKUP_IMAGES'
export const BACKUP_CONTACTS = 'BACKUP_CONTACTS'
export const WIFI_ONLY = 'WIFI_ONLY'
export const ERROR = 'ERROR'
export const SET_ANALYTICS = 'SET_ANALYTICS'
export const TOKEN_SCOPE = 'TOKEN_SCOPE'

// url

export const setUrl = url => ({ type: SET_URL, url })

// settings

export const setAnalytics = (analytics, source = 'settings') => (dispatch, getState) => {
  dispatch({ type: SET_ANALYTICS, analytics })
  const state = getState()
  configureReporter(analytics)
  if (analytics && state.mobile) {
    const value = state.mobile.settings.backupImages
    logInfo(`${source}: backup images is ${value ? 'enabled' : 'disabled'}`)
    dispatch(pingOnceADay(state.mobile.timestamp, analytics))
    // start the piwik tracker
    startTracker(state.mobile.settings.serverUrl)
  } else if (analytics === false) {
    stopTracker()
  }
}
export const setBackupImages = backupImages => ({ type: BACKUP_IMAGES, backupImages })
export const setWifiOnly = wifiOnly => ({ type: WIFI_ONLY, wifiOnly })
export const setBackupContacts = backupContacts => ({ type: BACKUP_CONTACTS, backupContacts })
export const setTokenScope = (scope) => ({ type: TOKEN_SCOPE, scope })

// registration
const registrationCallback = (client, url) => {
  return onRegistered(client, url)
  .then(url => url)
  .catch(err => {
    logException(err)
    throw err
  })
}

export const registerDevice = (serverUrl) => async (dispatch, getState) => {
  initClient(serverUrl, registrationCallback, getDeviceName())

  return await cozy.client.authorize(true).then(({ client, token }) => {
    saveClient(client, token)
  }).catch(err => {
    if (err.message === REGISTRATION_ABORT) {
      cozy.client._storage.clear()
    } else {
      logException(err)
    }
    throw err
  })
}

export const saveCredentials = (client, token) => (dispatch, getState) => {
  consle.log('in saver')
  dispatch(setClient(client))
  dispatch(setTokenScope(token.scope))
  startReplication(dispatch, getState)
}

export const startReplication = (dispatch, getState) => {
  const firstReplication = getState().settings.firstReplication
  const refreshFolder = () => { dispatch(openFolder(getOpenedFolderId(getState()))) }
  const revokeClient = () => { dispatch(reduxRevokeClient()) }
  const firstReplicationFinished = () => { dispatch(setFirstReplication(true)) }

  startPouchReplication(firstReplication, firstReplicationFinished, refreshFolder, revokeClient)
}
