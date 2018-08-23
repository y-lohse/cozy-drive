import React from 'react'
import { Query } from 'cozy-client'
import Main from '../components/Main'
import Topbar from '../components/Topbar'
import FileListHeader, {
  MobileFileListHeader
} from '../components/FileListHeader'
import FolderContent from '../components/FolderContent'
import Breadcrumb from './Breadcrumb'
import styles from '../styles/folderview'

const query = client =>
  client
    .find('io.cozy.files')
    .where({ dir_id: 'io.cozy.files.trash-dir' })
    .sortBy({ name: 'asc', type: 'asc' })

// <Toolbar
//   folderId={folderId}
//   actions={{}}
//   canUpload={false}
//   disabled={false}
//   onSelectItemsClick={showSelectionBar}
// />

class TrashContainer extends React.Component {
  render() {
    return (
      <Query query={query}>
        {({ data, fetchStatus }) => (
          <Main working={fetchStatus === 'loading'}>
            {console.log({ fetchStatus })}
            <Topbar>
              <Breadcrumb />
            </Topbar>
            <div className={styles['fil-content-table']} role="table">
              <MobileFileListHeader canSort={false} />
              <FileListHeader canSort={false} />
              <div className={styles['fil-content-body']}>
                <FolderContent
                  files={data}
                  selectionModeActive={false}
                  isAddingFolder={false}
                  isLoading={fetchStatus === 'loading'}
                  isInError={fetchStatus === 'error'}
                />
              </div>
            </div>
          </Main>
        )}
      </Query>
    )
  }
}

export default TrashContainer
