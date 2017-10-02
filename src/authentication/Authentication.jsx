import React, { Component } from 'react'

import Welcome from './steps/Welcome'
import SelectServer from './steps/SelectServer'
import Email from './steps/Email'
import InstanceName from './steps/InstanceName'
import Waiting from './steps/Waiting'
import Password from './steps/Password'

import { getInstance, createInstance, waitForInstance, getOAuth, INSTANCE_DOMAIN } from './lib/instance'
import { getClientParams, getDeviceName, registerDevice } from './lib/client'

const STEP_WELCOME = 'STEP_WELCOME'
const STEP_EXISTING_SERVER = 'STEP_EXISTING_SERVER'
const STEP_EMAIL = 'STEP_EMAIL'
const STEP_INSTANCE = 'STEP_INSTANCE'
const STEP_WAITING = 'STEP_WAITING'
const STEP_PASSWORD = 'STEP_PASSWORD'

class ServerSelectionWizard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentStepIndex: 0
    }

    this.steps = [STEP_WELCOME]
    this.email = ''
    this.token = ''
    this.fqdn = ''
    this.registerToken = ''
  }

  nextStep () {
    this.setState((prevState) => ({
      currentStepIndex: ++prevState.currentStepIndex
    }))
  }

  onAbort () {
    this.setState({ currentStepIndex: 0 })
  }

  setupSteps (needsInstanceCreation) {
    if (needsInstanceCreation) {
      this.steps = [STEP_WELCOME, STEP_EMAIL, STEP_INSTANCE, STEP_WAITING, STEP_PASSWORD]
    }
    else {
      this.steps = [STEP_WELCOME, STEP_EXISTING_SERVER]
    }

    this.nextStep()
  }

  storeEmailAndToken (email, token) {
    this.email = email
    this.token = token
    this.nextStep()
  }

  async createInstance (slug) {
    const clientParams = getClientParams(getDeviceName())

    await createInstance(slug, this.email, false, false, clientParams.clientName, clientParams.redirectURI, clientParams.softwareID, clientParams.scopes)

    this.fqdn = slug + '.' + INSTANCE_DOMAIN

    this.nextStep()

    const data = await waitForInstance(slug, this.email, this.token)
    console.log(data)
    const { register_token } = data
    const { registration_access_token  } = await getOAuth(slug, this.email, this.token)

    cozy.client.init({
      cozyURL: 'https://' + this.fqdn,
      token: registration_access_token
    })

    console.log('register_token', register_token)
    this.registerToken = register_token

    this.nextStep()
  }

  async setPassword (passphrase) {
    const result = await cozy.client.fetchJSON('POST', '/settings/passphrase', {
      register_token: this.registerToken,
      passphrase
    })

    this.props.updateServerUrl('https://' + this.fqdn)

    const { client, token } = await cozy.client.authorize()
    this.props.saveClient(client, token)

    this.props.onComplete()
    console.log('calling oncomplete')
  }

  async connectToServer (url) {
      const { client, token } = await registerDevice(url)
      console.log('calling oncomplete')
      this.props.onComplete({ url, client, token }, this.props.router)
  }

  render () {
    const { allowRegistration } = this.props
    const { currentStepIndex } = this.state
    const currentStep = this.steps[currentStepIndex]

    switch (currentStep) {
      case STEP_WELCOME:
        return <Welcome selectServer={() => this.setupSteps(false)} register={() => this.setupSteps(true)} allowRegistration={allowRegistration} />
      case STEP_EXISTING_SERVER:
        return <SelectServer nextStep={this.connectToServer.bind(this)} previousStep={() => this.onAbort()} />
      case STEP_EMAIL:
        return <Email nextStep={this.storeEmailAndToken.bind(this)} previousStep={() => this.onAbort()}  />
      case STEP_INSTANCE:
        return <InstanceName nextStep={this.createInstance.bind(this)} previousStep={() => this.onAbort()}  />
      case STEP_WAITING:
        return <Waiting fqdn={this.fqdn} />
      case STEP_PASSWORD:
        return <Password nextStep={this.setPassword.bind(this)}  />
      default:
        return null
    }
  }
}

export default ServerSelectionWizard
