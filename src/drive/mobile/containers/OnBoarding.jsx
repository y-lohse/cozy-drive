import React, { Component } from 'react'


import ServerSelectionWizard from './ServerSelectionWizard'
import Wizard from '../components/Wizard'

import Files from './onboarding/Files'
import BackupPhotosVideos from './onboarding/BackupPhotosVideos'
import BackupContacts from './onboarding/BackupContacts'
import Analytics from './onboarding/Analytics'

export default class OnBoarding extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isConnected: false
    }

    this.onboardingSteps = [
      Files,
      BackupPhotosVideos,
      BackupContacts,
      Analytics
    ]
  }

  showOnboardingWizard () {
    this.setState({ isConnected: true })
  }

  redirectToApp () {
    if (this.props.location.state && this.props.location.state.nextPathname) {
      this.props.router.replace(this.props.location.state.nextPathname)
    } else {
      this.props.router.replace('/')
    }
  }

  render () {
    const { isConnected } = this.state

    return isConnected === false
      ? <ServerSelectionWizard onComplete={() => this.showOnboardingWizard()} />
      : <Wizard steps={this.onboardingSteps} onComplete={() => this.redirectToApp()} />
  }
}

