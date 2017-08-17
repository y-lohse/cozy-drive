import React, { Component } from 'react'

import Welcome from './onboarding/Welcome'
import SelectServer from './onboarding/SelectServer'
import Email from './onboarding/Email'
import InstanceName from './onboarding/InstanceName'

const STEP_WELCOME = 'STEP_WELCOME'
const STEP_EXISTING_SERVER = 'STEP_EXISTING_SERVER'
const STEP_EMAIL = 'STEP_EMAIL'
const STEP_INSTANCE = 'STEP_INSTANCE'

export default class ServerSelectionWizard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentStep: STEP_EMAIL
    }

    this.steps = []
  }

  afterWelcome (needsInstanceCreation) {
    if (needsInstanceCreation) {
      this.steps = [STEP_EMAIL]
    }
    else {
      this.steps = [STEP_EXISTING_SERVER]
    }

    this.setState({ currentStep: this.steps[0] })
  }

  onAbort () {
    this.setState({ currentStep: STEP_WELCOME })
  }

  afterEmail (email) {
    console.log('email saved')
  }

  afterInstance (instance) {
    console.log('instance name saved')
    this.props.onComplete()
  }

  render () {
    const { currentStep } = this.state

    switch (currentStep) {
      case STEP_WELCOME:
        return <Welcome selectServer={() => this.afterWelcome(false)} register={() => this.afterWelcome(true)} />
      case STEP_EXISTING_SERVER:
        return <SelectServer nextStep={this.props.onComplete} previousStep={() => this.onAbort()} />
      case STEP_EMAIL:
        return <Email nextStep={this.afterEmail.bind(this)} previousStep={() => this.onAbort()}  />
      case STEP_INSTANCE:
        return <InstanceName nextStep={this.afterInstance.bind(this)} previousStep={() => this.onAbort()}  />
      default:
        return null
    }
  }
}

