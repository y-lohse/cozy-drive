import React from 'react'
import classNames from 'classnames'
import { translate } from 'cozy-ui/react/I18n'
import ReactMarkdown from 'react-markdown'

import styles from '../styles'
import cozyWIP from '../assets/illustrations/cozywip.gif'

export const Waiting = ({ t, fqdn }) =>
(
  <div className={styles['wizard']}>
    <img src={cozyWIP} alt='turning wheels' className={styles['illustration-waiting']} />
    <h1>
      <ReactMarkdown source={t('mobile.onboarding.waiting.description', {domain: fqdn})} />
    </h1>
  </div>
)

export default translate()(Waiting)
