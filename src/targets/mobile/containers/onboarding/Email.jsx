import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'

import { translate } from 'cozy-ui/react/I18n'

import styles from '../../styles/onboarding'

export class Email extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      error: null
    }
  }

  componentDidMount () {
    this.emailInput.focus()
  }

  validateEmail (e) {
    this.setState({ email: e.target.value, error: null })
  }

  onSubmit (e) {
    e.preventDefault()
    if (!this.emailInput.checkValidity()){
      this.setState({ error: 'mobile.onboarding.email.invalid' })
    }
    else {
      //#TODO: check the API if the email is ok
      const { email } = this.state
      this.props.nextStep(email)
    }
  }

  render () {
    const { t, previousStep, validateEmail } = this.props
    const { email, error } = this.state

    return (
      <form className={classNames(styles['wizard'], styles['enter-email'])} onSubmit={this.onSubmit.bind(this)}>
        <header className={styles['wizard-header']}>
          <a
            className={styles['close-button']}
            onClick={previousStep}
          />
        </header>
        <div className={styles['wizard-main']}>
          <div
            className={error
              ? classNames(styles['logo-wrapper'], styles['error'])
              : styles['logo-wrapper']}
          >
            <div className={styles['email-white']} />
          </div>
          <input
            type='email'
            className={error
              ? classNames(styles['input'], styles['error'])
              : styles['input']}
            placeholder={t('mobile.onboarding.email.cozy_email_placeholder')}
            ref={(input) => { this.emailInput = input }}
            value={email}
            onChange={this.validateEmail.bind(this)}
            required
          />
          {!error &&
            <p className={styles['description']}>
              {t('mobile.onboarding.email.description')}
            </p>
          }
          {error &&
            <p className={styles['description']} style={{color: 'red'}}>
              <ReactMarkdown source={t(error)} />
            </p>
          }
        </div>
        <footer className={styles['wizard-footer']}>
          <button
            role='button'
            type='submit'
            className={'coz-btn coz-btn--regular'}
            disabled={error || !email}
          >
            {t('mobile.onboarding.server_selection.button')}
          </button>
        </footer>
      </form>
    )
  }
}

export default translate()(Email)
