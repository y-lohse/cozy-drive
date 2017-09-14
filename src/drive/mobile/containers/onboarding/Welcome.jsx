import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { translate } from 'cozy-ui/react/I18n'

import styles from '../../styles/onboarding'

export class Welcome extends Component {
  render () {
    const { t, selectServer, register } = this.props

    return (
      <div className={classNames(styles['wizard'], styles['welcome'])}>
        <div className={styles['wizard-main']}>
          <div className={styles['logo-wrapper']}>
            <div className={styles['cozy-logo-white']} />
          </div>
          <h1 className={styles['title']}>
            {t('mobile.onboarding.welcome.title1')}
          </h1>
          <h1 className={styles['title']}>
            {t('mobile.onboarding.welcome.title2')}
          </h1>
        </div>
        <footer className={styles['wizard-footer']}>
          <button role='button'
            className='coz-btn coz-btn--regular'
            onClick={selectServer}
          >
            {t('mobile.onboarding.welcome.button')}
          </button>
          <a className={styles['link']} onClick={register}>
            {t('mobile.onboarding.welcome.sign_up')}
          </a>
        </footer>
      </div>
    )
  }
}

export default connect()(translate()(Welcome))
