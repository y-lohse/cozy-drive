import base64 from 'base-64'

const URI = 'https://gozy-deploy-dev.cozycloud.cc'
export const INSTANCE_DOMAIN = 'cozy.wtf'
const OFFER_NAME = 'cozy_beta'

const get = (uri) => fetch(uri, {
  method: 'get'
})

const authedGet = (uri, username, password) => fetch(uri, {
  method: 'get',
  headers: {
    'Authorization': 'Basic ' + base64.encode(`${username}:${password}`)
  }
})

const post = (uri, data) => fetch(uri, {
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})

export const createAccount = (email) => post(`${URI}/accounts/create`, { email })

export const getAccount = (email) => get(`${URI}/accounts/get/${email}`)

export const createInstance = (slug, email, subscribed, useTracker, clientName, redirectURI, softwareId, scopes) =>
  post(`${URI}/instances/create`, {
    slug: slug,
    account: email,
    email: email,
    ml_registered: subscribed,
    domain: INSTANCE_DOMAIN,
    offer: OFFER_NAME,
    use_tracker: useTracker,
    oauth_client_name: clientName,
    oauth_redirect_uri: redirectURI,
    oauth_software_id: softwareId,
    oauth_scopes: scopes,
  })

export const getInstance = (name) => get(`${URI}/instances/get/${name}.${INSTANCE_DOMAIN}`)

export const getOAuth = async (name, email, token) => {
  const response = await authedGet(`${URI}/instances/oauth/get/${name}.${INSTANCE_DOMAIN}`, email, token)
  return response.json()
}

const API_STATUS_DONE = 'DONE'
const API_STATUS_MOBILEDONE = 'MOBILEDONE'

export const waitForInstance = (slug, email, token) => {
  return new Promise(async (resolve) => {
    const response = await authedGet(`${URI}/instances/get/${slug}.${INSTANCE_DOMAIN}`, email, token)
    const data = await response.json()
    if (data.state && (data.state === API_STATUS_MOBILEDONE || data.state === API_STATUS_DONE)) resolve(data)
    else setTimeout(() => waitForInstance(slug, email, token).then(resolve), 5000)
  })
}
