import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'

import { translate } from 'cozy-ui/react/I18n'

import styles from '../../styles/onboarding'

export class Password extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      error: null
    }
  }

  componentDidMount () {
    this.input.focus()
  }

  validateValue (e) {
    this.setState({ value: e.target.value, error: null })
  }

  onSubmit (e) {
    e.preventDefault()
    if (!this.emailInput.checkValidity()){
      this.setState({ error: 'mobile.onboarding.instance.invalid' })
    }
    else {
      //#TODO: check the API if the email is ok
      const { value } = this.state
      this.props.nextStep(value)
    }
  }

  render () {
    const { t, previousStep, validateValue } = this.props
    const { value, error } = this.state

    return (
      <form className={classNames(styles['wizard'], styles['set-password'])} onSubmit={this.onSubmit.bind(this)}>
        <div className={styles['wizard-main']}>
          <div
            className={error
              ? classNames(styles['logo-wrapper'], styles['error'])
              : styles['logo-wrapper']}
          >
            <div className={styles['link-white']} />
          </div>
          <input
            type='password'
            className={error
              ? classNames(styles['input'], styles['error'])
              : styles['input']}
            ref={(input) => { this.input = input }}
            placeholder={t('mobile.onboarding.password.placeholder')}
            value={value}
            onChange={this.validateValue.bind(this)}
            required
          />
          <meter
            step='1' min='0' max='100'
            value='50'
          />
          {!error &&
            <p className={styles['description']}>
              {t('mobile.onboarding.instance.description')}
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
            disabled={error || !value}
          >
            {t('mobile.onboarding.server_selection.button')}
          </button>
        </footer>
      </form>
    )
  }
}

export default translate()(Password)
