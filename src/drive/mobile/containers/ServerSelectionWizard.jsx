import React, { Component } from 'react'
import { connect } from 'react-redux'

import Welcome from './onboarding/Welcome'
import SelectServer from './onboarding/SelectServer'
import Email from './onboarding/Email'
import InstanceName from './onboarding/InstanceName'
import Waiting from './onboarding/Waiting'
import Password from './onboarding/Password'

import { getClientParams } from '../lib/cozy-helper'
import { getDeviceName } from '../lib/device'
import { getInstance, createInstance, waitForInstance, getOAuth, INSTANCE_DOMAIN } from '../lib/instance'
import { registerDevice, setUrl } from '../actions/settings'

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

  afterWelcome (needsInstanceCreation) {
    if (needsInstanceCreation) {
      this.steps = [STEP_WELCOME, STEP_EMAIL, STEP_INSTANCE, STEP_WAITING, STEP_PASSWORD]
    }
    else {
      this.steps = [STEP_WELCOME, STEP_EXISTING_SERVER]
    }

    this.nextStep()
  }

  afterEmail (email, token) {
    this.email = email
    this.token = token
    this.nextStep()
  }

  async afterInstance (slug) {
    const clientParams = getClientParams(getDeviceName())

    await createInstance(slug, this.email, false, false, clientParams.clientName, clientParams.redirectURI, clientParams.softwareID, clientParams.scopes)

    this.nextStep()

    const { register_token } = await waitForInstance(slug, this.email, this.token)
    this.fqdn = slug + '.' + INSTANCE_DOMAIN

    const { registration_access_token  } = await getOAuth(slug, this.email, this.token)

    cozy.client.init({
      cozyURL: 'https://' + this.fqdn,
      token: registration_access_token
    })

    this.registerToken = register_token

    this.nextStep()
  }

  async afterPassword (passphrase) {
    const result = await cozy.client.fetchJSON('POST', '/settings/passphrase', {
      register_token: this.registerToken,
      passphrase
    })

    this.props.updateServerUrl('https://' + this.fqdn)

    this.props.onComplete()
  }

  async afterServerSelect (url) {
    try {
      this.props.updateServerUrl(url)
      await this.props.registerDevice(url)
      this.props.onComplete()
    }
    catch (_) {}
  }

  render () {
    const { currentStepIndex } = this.state
    const currentStep = this.steps[currentStepIndex]

    switch (currentStep) {
      case STEP_WELCOME:
        return <Welcome selectServer={() => this.afterWelcome(false)} register={() => this.afterWelcome(true)} />
      case STEP_EXISTING_SERVER:
        return <SelectServer nextStep={this.afterServerSelect.bind(this)} previousStep={() => this.onAbort()} />
      case STEP_EMAIL:
        return <Email nextStep={this.afterEmail.bind(this)} previousStep={() => this.onAbort()}  />
      case STEP_INSTANCE:
        return <InstanceName nextStep={this.afterInstance.bind(this)} previousStep={() => this.onAbort()}  />
      case STEP_WAITING:
        return <Waiting fqdn={this.fqdn} />
      case STEP_PASSWORD:
        return <Password nextStep={this.afterPassword.bind(this)}  />
      default:
        return null
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  registerDevice: (url) => dispatch(registerDevice(url)),
  updateServerUrl: (url) => dispatch(setUrl(url))
})

export default connect(null, mapDispatchToProps)(ServerSelectionWizard)
