import React, { Component } from 'react'

import Welcome from './onboarding/Welcome'
import SelectServer from './onboarding/SelectServer'
import Email from './onboarding/Email'
import InstanceName from './onboarding/InstanceName'
import Waiting from './onboarding/Waiting'
import Password from './onboarding/Password'

const STEP_WELCOME = 'STEP_WELCOME'
const STEP_EXISTING_SERVER = 'STEP_EXISTING_SERVER'
const STEP_EMAIL = 'STEP_EMAIL'
const STEP_INSTANCE = 'STEP_INSTANCE'
const STEP_WAITING = 'STEP_WAITING'
const STEP_PASSWORD = 'STEP_PASSWORD'

export default class ServerSelectionWizard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentStepIndex: 0
    }

    this.steps = [STEP_WELCOME]
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

  onAbort () {
    this.setState({ currentStepIndex: 0 })
  }

  nextStep () {
    this.setState((prevState) => ({
      currentStepIndex: ++prevState.currentStepIndex
    }))
  }

  afterEmail (email) {
    console.log('email saved')
    this.nextStep()
  }

  afterInstance (instance) {
    console.log('instance name saved')
    this.nextStep()

    //@TODO: register instance
    setTimeout(() => {
      this.nextStep()
    }, 1000)
  }

  afterPassword () {
    console.log('password set')
    this.props.onComplete()
  }

  render () {
    const { currentStepIndex } = this.state
    const currentStep = this.steps[currentStepIndex]

    switch (currentStep) {
      case STEP_WELCOME:
        return <Welcome selectServer={() => this.afterWelcome(false)} register={() => this.afterWelcome(true)} />
      case STEP_EXISTING_SERVER:
        return <SelectServer nextStep={this.props.onComplete} previousStep={() => this.onAbort()} />
      case STEP_EMAIL:
        return <Email nextStep={this.afterEmail.bind(this)} previousStep={() => this.onAbort()}  />
      case STEP_INSTANCE:
        return <InstanceName nextStep={this.afterInstance.bind(this)} previousStep={() => this.onAbort()}  />
      case STEP_WAITING:
        return <Waiting />
      case STEP_PASSWORD:
        return <Password nextStep={this.afterPassword.bind(this)}  />
      default:
        return null
    }
  }
}

