/* global cozy __APP_VERSION__ */
import { CozyClient } from 'redux-cozy-client'
import { LocalStorage as Storage } from 'cozy-client-js'

const isCordova = () => window.cordova !== undefined
const hasDeviceCordovaPlugin = () => isCordova() && window.device !== undefined
const getDeviceName = () => hasDeviceCordovaPlugin() ? window.device.model : 'Device'

export const SOFTWARE_ID = 'io.cozy.drive.mobile'
export const SOFTWARE_NAME = `Cozy Drive (${getDeviceName()})`
const getLang = () => (navigator && navigator.language) ? navigator.language.slice(0, 2) : 'en'

export function resetClient (clientInfo) {
  // reset cozy-bar
  if (document.getElementById('coz-bar')) {
    document.getElementById('coz-bar').remove()
  }
  // reset pouchDB
  if (cozy.client.offline.destroyAllDatabase) {
    cozy.client.offline.destroyAllDatabase()
  }
  // unregister the client
  if (clientInfo && cozy.client.auth.unregisterClient) {
    cozy.client.auth.unregisterClient(clientInfo)
  }
  // reset cozy-client-js
  if (cozy.client._storage) {
    cozy.client._storage.clear()
  }
}

const defaultClientOptions = {
  redirectURI: 'http://localhost',
  softwareID: 'io.cozy.app',
  softwareVersion: '1.0.0',
  clientName: `${SOFTWARE_NAME}`,
  clientKind: 'mobile',
  clientURI: 'https://cozy.io',
  logoURI: 'https://raw.githubusercontent.com/cozy/cozy-drive/master/vendor/assets/apple-touch-icon-120x120.png',
  policyURI: 'https://files.cozycloud.cc/cgu.pdf',
  scopes: [],
  offline: {}
}

export const initClient = (url, options = defaultClientOptions) => {
  options = {...defaultClientOptions ...options}

  return new CozyClient({
    cozyURL: url,
    oauth: {
      storage: new Storage(),
      clientParams: {
        redirectURI: options.redirectURI,
        softwareID: options.softwareID,
        softwareVersion: options.softwareVersion,
        clientName: `${SOFTWARE_NAME} (${getDeviceName()})`,
        clientKind: options.clientKind,
        clientURI: options.clientURI,
        logoURI: options.logoURI,
        policyURI: options.policyURI,
        scopes: options.scopes
      }
    },
    offline: options.offline
  })
}

export const initBar = () => {
  cozy.bar.init({
    appName: 'Drive',
    appEditor: 'Cozy',
    iconPath: require('../../../targets/drive/vendor/assets/app-icon.svg'),
    lang: getLang(),
    replaceTitleOnMobile: true
  })
}
