/* global cozy __APP_VERSION__ */
import { CozyClient } from 'redux-cozy-client'
import { LocalStorage as Storage } from 'cozy-client-js'

const isCordova = () => window.cordova !== undefined
const hasDeviceCordovaPlugin = () => isCordova() && window.device !== undefined
export const getDeviceName = () => hasDeviceCordovaPlugin() ? window.device.model : 'Device'
const SOFTWARE_ID = 'io.cozy.bank.mobile'
const SOFTWARE_NAME = 'Cozy Bank'
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

export const initClient = (url) => {
  return new CozyClient({
    cozyURL: url,
    oauth: {
      storage: new Storage(),
      clientParams: {
        redirectURI: 'http://localhost',
        softwareID: SOFTWARE_ID,
        clientName: `${SOFTWARE_NAME} (${getDeviceName()})`,
        softwareVersion: __APP_VERSION__,
        clientKind: 'mobile',
        clientURI: 'https://github.com/cozy/cozy-drive/',
        logoURI: 'https://raw.githubusercontent.com/cozy/cozy-drive/master/vendor/assets/apple-touch-icon-120x120.png',
        policyURI: 'https://files.cozycloud.cc/cgu.pdf',
        scopes: ['io.cozy.files', 'io.cozy.contacts', 'io.cozy.jobs:POST:sendmail:worker', 'io.cozy.settings']//:PUT:passphrase']
      }
    },
    offline: {doctypes: ['io.cozy.files']}
  })
}

export const initBar = () => {
  cozy.bar.init({
    appName: 'Bank',
    appEditor: 'Cozy',
    iconPath: require('../../../targets/drive/vendor/assets/app-icon.svg'),
    lang: getLang(),
    replaceTitleOnMobile: true
  })
}
