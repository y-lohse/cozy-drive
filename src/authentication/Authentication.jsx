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

    await waitForInstance(slug, this.email, this.token)
    const { register_token, registration_access_token } = await getOAuth(slug, this.email, this.token)

    cozy.client.init({
      cozyURL: 'https://' + this.fqdn,
      token: registration_access_token
    })

    console.log(cozy.client)
    const authorized = await cozy.client.authorize(true)
    console.log(authorized)
//    this.registerToken = register_token

//    this.nextStep()
  }

  async setPassword (passphrase) {
    await cozy.client.fetchJSON('POST', '/settings/passphrase', {
      register_token: this.registerToken,
      passphrase
    })

    const authorized = await cozy.client.authorize(true)
    console.log(authorized)
//    this.props.onComplete({ url: 'https://' + this.fqdn, clientInfo: client, token, router: this.props.router })
  }

  connectToServer = async (url) => {
    try {
      const cozyClient = this.context.client
      const { client, token } = await cozyClient.register(url)
//      clientID
//:
//"e1ffb6927eb773dfba739306dd0051f7"
//clientKind
//:
//"mobile"
//clientName
//:
//"Cozy Drive (Device) (Device)"
//clientSecret
//:
//"oTYmfYxr3k4wDbbcr5tjRDyJGHhYsngy"
//clientURI
//:
//"https://github.com/cozy/cozy-drive/"
//logoURI
//:
//"https://raw.githubusercontent.com/cozy/cozy-drive/master/vendor/assets/apple-touch-icon-120x120.png"
//policyURI
//:
//"https://files.cozycloud.cc/cgu.pdf"
//redirectURI
//:
//"http://localhost"
//registrationAccessToken
//:
//"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJyZWdpc3RyYXRpb24iLCJpYXQiOjE1MDc5MDI2MDgsImlzcyI6ImNvenkudG9vbHM6ODA4MCIsInN1YiI6ImUxZmZiNjkyN2ViNzczZGZiYTczOTMwNmRkMDA1MWY3In0.Mpgb-om8SvGhShfc0YaaXftP9iyoHlqtCK9xJy37jzVKZtKaLaygf2Dd_TPo-0Y0aDRCahMrKaRdaEzpcm15RQ"
//softwareID
//:
//"io.cozy.drive.mobile"
//softwareVersion
//:
//"0.4.0"
//
//accessToken
//:
//"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2Nlc3MiLCJpYXQiOjE1MDc5MDI2MTksImlzcyI6ImNvenkudG9vbHM6ODA4MCIsInN1YiI6ImUxZmZiNjkyN2ViNzczZGZiYTczOTMwNmRkMDA1MWY3Iiwic2NvcGUiOiJpby5jb3p5LmZpbGVzIGlvLmNvenkuY29udGFjdHMgaW8uY296eS5qb2JzOlBPU1Q6c2VuZG1haWw6d29ya2VyIGlvLmNvenkuc2V0dGluZ3M6UFVUOnBhc3NwaHJhc2UifQ.SwCJGhMO-na4nUXd1Ut9_CORF0zBdK0TGUmfkbes-yK3iWGTtl4xcU21dpXHZNMcwkdNu9M7RKtVnmtIRgZaaQ"
//refreshToken
//:
//"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJyZWZyZXNoIiwiaWF0IjoxNTA3OTAyNjE5LCJpc3MiOiJjb3p5LnRvb2xzOjgwODAiLCJzdWIiOiJlMWZmYjY5MjdlYjc3M2RmYmE3MzkzMDZkZDAwNTFmNyIsInNjb3BlIjoiaW8uY296eS5maWxlcyBpby5jb3p5LmNvbnRhY3RzIGlvLmNvenkuam9iczpQT1NUOnNlbmRtYWlsOndvcmtlciBpby5jb3p5LnNldHRpbmdzOlBVVDpwYXNzcGhyYXNlIn0.bzzPOGzN1Uq_P-JKPsZ2PHZ2EMgzDGDaFKcg3DZEQw181DIIcOCrCKKVSNEbnxrUzRzePh1AMm378NttoN6AVA"
//scope
//:
//"io.cozy.files io.cozy.contacts io.cozy.jobs:POST:sendmail:worker io.cozy.settings:PUT:passphrase"
//tokenType
//:
//"bearer"
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
