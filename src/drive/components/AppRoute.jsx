/* global __TARGET__ */
import React from 'react'
import { Route, Redirect } from 'react-router'

import Layout from './Layout'
import FileExplorer from '../containers/FileExplorer'
import Settings from '../mobile/components/Settings'

import { FolderContainer as Folder, RecentContainer as Recent } from '../ducks/files'
import { Container as Trash } from '../ducks/trash'

const AppRoute = (
  <Route component={Layout}>
    <Route component={FileExplorer}>
      <Redirect from='/' to='files' />
      <Route path='files(/:folderId)' component={Folder} />
      <Route path='recent' component={Recent} />
      <Route path='trash(/:folderId)' component={Trash} />
    </Route>
    { __TARGET__ === 'mobile' && <Route path='settings' name='mobile.settings' component={Settings} /> }
  </Route>
)

export default AppRoute
