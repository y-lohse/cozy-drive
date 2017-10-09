// platform
export const isCordova = () => window.cordova !== undefined
export const getPlatformId = () => isCordova() ? window.cordova.platformId : undefined
const isPlatform = platform => getPlatformId() === platform
export const isIos = () => isPlatform('ios')
export const isAndroid = () => isPlatform('android')

// device
const hasDeviceCordovaPlugin = () => isCordova() && window.device !== undefined
export const getDeviceName = () => hasDeviceCordovaPlugin() ? window.device.model : undefined
export const getLang = () => (navigator && navigator.language) ? navigator.language.slice(0, 2) : 'en'
