import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import classNames from 'classnames'

import { translate } from 'cozy-ui/react/I18n'
import { getInstance, INSTANCE_DOMAIN } from '../lib/instance'
import styles from '../styles'

export class InstanceName extends Component {
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

  async onSubmit (e) {
    e.preventDefault()
    if (!this.input.checkValidity()){
      this.setState({ error: 'mobile.onboarding.instance.invalid' })
    }
    else {
      const { value } = this.state
      const response = await getInstance(value)

      if (response.status === 404) this.props.nextStep(value)
      else if (response.status === 200) this.setState({ error: 'mobile.onboarding.instance.existing' })
      else if (response.status === 400) this.setState({ error: 'mobile.onboarding.instance.blacklisted' })
      else this.setState({ error: 'mobile.onboarding.instance.invalid' })
    }
  }

  render () {
    const { t, previousStep, validateValue } = this.props
    const { value, error } = this.state

    return (
      <form className={classNames(styles['wizard'], styles['enter-instance'])} onSubmit={this.onSubmit.bind(this)}>
        <header className={styles['wizard-header']}>
          <a
            className={classNames(styles['button-previous'], styles['--arrow'])}
            onClick={previousStep}
          />
        </header>
        <div className={styles['wizard-main']}>
          <div
            className={error
              ? classNames(styles['logo-wrapper'], styles['error'])
              : styles['logo-wrapper']}
          >
            <div className={styles['link-white']} />
          </div>
          <div className={styles['instance-name-input']}>
            <input
              type='text'
              className={error
                ? classNames(styles['input'], styles['error'])
                : styles['input']}
              placeholder={t('mobile.onboarding.instance.placeholder')}
              ref={(input) => { this.input = input }}
              value={value}
              onChange={this.validateValue.bind(this)}
              required
            />
            <span className={styles['domain']}>
              {'.' + INSTANCE_DOMAIN.toLowerCase()}
            </span>
          </div>
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

export default translate()(InstanceName)
