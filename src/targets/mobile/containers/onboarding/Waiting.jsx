import React from 'react'
import styles from '../../styles/onboarding'
import classNames from 'classnames'
import { translate } from 'cozy-ui/react/I18n'

import cozyWIP from '../../assets/illustrations/cozywip.gif'

export const Waiting = ({ t }) =>
(
  <div className={styles['wizard']}>
    <img src={cozyWIP} alt='…' className={styles['illustration-waiting']} />
    <h1>
      <em>bidule.cozy.cloud</em>
      <div>
        {t('mobile.onboarding.waiting.text')}
      </div>
    </h1>
  </div>
)

export default translate()(Waiting)
