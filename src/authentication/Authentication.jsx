import React, { Component } from 'react'

import Welcome from './steps/Welcome'
import SelectServer from './steps/SelectServer'
import Email from './steps/Email'
import InstanceName from './steps/InstanceName'
import Waiting from './steps/Waiting'
import Password from './steps/Password'

import { createInstance, waitForInstance, getOAuth, INSTANCE_DOMAIN } from './lib/instance'
import { SOFTWARE_NAME, SOFTWARE_ID } from './lib/client'

const STEP_WELCOME = 'STEP_WELCOME'
const STEP_EXISTING_SERVER = 'STEP_EXISTING_SERVER'
const STEP_EMAIL = 'STEP_EMAIL'
const STEP_INSTANCE = 'STEP_INSTANCE'
const STEP_WAITING = 'STEP_WAITING'
const STEP_PASSWORD = 'STEP_PASSWORD'

class Authentication extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentStepIndex: 0,
      globalError: null
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
    } else {
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
    await createInstance(
      slug,
      this.email,
      false,
      false,
      SOFTWARE_NAME,
      'http://localhost',
      SOFTWARE_ID,
      ['io.cozy.files', 'io.cozy.contacts', 'io.cozy.jobs:POST:sendmail:worker', 'io.cozy.settings:PUT:passphrase'])

    this.fqdn = slug + '.' + INSTANCE_DOMAIN

    this.nextStep()

    const data = await waitForInstance(slug, this.email, this.token)
    const data2 = await getOAuth(slug, this.email, this.token)
    console.log(data)
    console.log(data2)

//    cozy.client.init({
//      cozyURL: 'https://' + this.fqdn,
//      token: registration_access_token
//    })
//
//    console.log('register_token', data.register_token)
//    this.registerToken = data.register_token
//
//    this.nextStep()
  }

  async setPassword (passphrase) {
    await cozy.client.fetchJSON('POST', '/settings/passphrase', {
      register_token: this.registerToken,
      passphrase
    })

    this.props.updateServerUrl('https://' + this.fqdn)

    const { client, token } = await cozy.client.authorize()
    this.props.saveClient(client, token)

    this.props.onComplete()
    console.log('calling oncomplete')
  }

  connectToServer = async (url) => {
    try {
      const cozyClient = this.context.client
      const { client, token } = await cozyClient.register(url)
      this.props.onComplete({ url, clientInfo: client, token, router: this.props.router })
    } catch (err) {
      this.setState({ globalError: err })
    }
  }

  render () {
    const { currentStepIndex, globalError } = this.state
    const currentStep = this.steps[currentStepIndex]

    switch (currentStep) {
      case STEP_WELCOME:
        return <Welcome selectServer={() => this.setupSteps(false)} register={() => this.setupSteps(true)} allowRegistration={true} />
      case STEP_EXISTING_SERVER:
        return <SelectServer nextStep={this.connectToServer} previousStep={() => this.onAbort()} connectionError={globalError} />
      case STEP_EMAIL:
        return <Email nextStep={this.storeEmailAndToken.bind(this)} previousStep={() => this.onAbort()} />
      case STEP_INSTANCE:
        return <InstanceName nextStep={this.createInstance.bind(this)} previousStep={() => this.onAbort()} />
      case STEP_WAITING:
        return <Waiting fqdn={this.fqdn} />
      case STEP_PASSWORD:
        return <Password nextStep={this.setPassword.bind(this)} />
      default:
        return null
    }
  }
}

export default Authentication
