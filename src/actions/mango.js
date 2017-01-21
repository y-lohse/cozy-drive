/**
  Mango index related features (cozy-stack)
**/

import cozy from 'cozy-client-js'

import {
  DO_INDEX_FILES_BY_DATE,
  INDEX_FILES_BY_DATE_SUCCESS,
  FILE_DOCTYPE
} from './constants'

// Mango: Index files by date (create if not existing) and get its informations
export const indexFilesByDate = () => {
  return async dispatch => {
    dispatch({ type: DO_INDEX_FILES_BY_DATE })
    const fields = [ 'class', 'created_at' ]
    const mangoIndexByDate = await cozy.defineIndex(FILE_DOCTYPE, fields)
    dispatch({
      type: INDEX_FILES_BY_DATE_SUCCESS,
      mangoIndexByDate
    })
  }
}
