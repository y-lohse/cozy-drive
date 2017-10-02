/* global cozy */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'cozy-ui/react/Modal'
import { translate } from 'cozy-ui/react/I18n'

import { resetClient } from './lib/client'

import { unrevokeClient } from 'drive/mobile/actions/authorization'
import { registerDevice } from 'drive/mobile/actions/settings'

class RevokableWrapper extends Component {
  logout () {
    resetClient()
    this.props.unrevokeClient()
    this.props.router.replace({
      pathname: '/onboarding',
      state: { nextPathname: this.props.location.pathname }
    })
  }

  loginagain () {
    cozy.client._storage.clear()
    this.props.registerDevice()
  }

  render () {
    const { children, t } = this.props
    if (this.props.revoked) {
      return (
        <div>
          <Modal
            title={t('mobile.revoked.title')}
            description={t('mobile.revoked.description')}
            secondaryText={t('mobile.revoked.logout')}
            secondaryAction={() => { this.logout() }}
            primaryText={t('mobile.revoked.loginagain')}
            primaryAction={() => { this.loginagain() }}
            withCross={false}
          />
          {children}
        </div>
      )
    } else {
      return children
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  unrevokeClient: () => dispatch(unrevokeClient()),
  registerDevice: () => dispatch(registerDevice()).then(() => { dispatch(unrevokeClient()) })
})

export default connect(null, mapDispatchToProps)(translate()(RevokableWrapper))
