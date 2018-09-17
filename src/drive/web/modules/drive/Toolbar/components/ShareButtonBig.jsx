import React from 'react'
import { ShareButton } from 'sharing'
import styles from 'drive/styles/toolbar'

import shareContainer from '../containers/share'
const ShareButtonBig = ({ displayedFolder, share, isDisabled }) => {
  return (
    <ShareButton
      docId={displayedFolder.id}
      disabled={isDisabled}
      onClick={() => share(displayedFolder)}
      className={styles['u-hide--mob']}
    />
  )
}

export default shareContainer(ShareButtonBig)
