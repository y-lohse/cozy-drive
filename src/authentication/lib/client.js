import { LocalStorage as Storage } from 'cozy-client-js'
import { onRegistered } from './registration'

const isCordova = () => window.cordova !== undefined
const hasDeviceCordovaPlugin = () => isCordova() && window.device !== undefined
export const getDeviceName = () => hasDeviceCordovaPlugin() ? window.device.model : 'Device'
const SOFTWARE_ID = 'io.cozy.drive.mobile'
const SOFTWARE_NAME = 'Cozy Drive'

export function resetClient () {
  // reset cozy-bar
  if (document.getElementById('coz-bar')) {
    document.getElementById('coz-bar').remove()
  }
  // reset pouchDB
  if (cozy.client.offline.destroyAllDatabase) {
    cozy.client.offline.destroyAllDatabase()
  }
  // reset cozy-client-js
  if (cozy.client._storage) {
    cozy.client._storage.clear()
  }
}

export const getClientParams = (device) => ({
  redirectURI: 'http://localhost',
  softwareID: SOFTWARE_ID,
  clientName: `${SOFTWARE_NAME} (${device})`,
  softwareVersion: __APP_VERSION__,
  clientKind: 'mobile',
  clientURI: 'https://github.com/cozy/cozy-drive/',
  logoURI: 'https://raw.githubusercontent.com/cozy/cozy-drive/master/vendor/assets/apple-touch-icon-120x120.png',
  policyURI: 'https://files.cozycloud.cc/cgu.pdf',
  scopes: ['io.cozy.files', 'io.cozy.contacts', 'io.cozy.jobs:POST:sendmail:worker', 'io.cozy.settings']//:PUT:passphrase']
})

export const initClient = (url, onRegister = null, deviceName) => {
  console.log('init', url)
  if (url) {
    console.log(`Cozy Client initializes a connection with ${url}`)
    cozy.client.init({
      cozyURL: url,
      oauth: {
        storage: new Storage(),
        clientParams: getClientParams(deviceName),
        onRegistered: onRegister
      },
      offline: {doctypes: ['io.cozy.files']}
    })
  }
}

const registrationCallback = (client, url) => {
  return onRegistered(client, url)
  .then(url => url)
  .catch(err => {
    logException(err)
    throw err
  })
}

export const registerDevice = (serverUrl) => {
  initClient(serverUrl, registrationCallback, getDeviceName())
  return cozy.client.authorize(true)
}
