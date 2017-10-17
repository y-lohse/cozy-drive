/* global cozy */
import autocompleteAlgolia from 'autocomplete.js'
import fuzzyWordsSearch from '../lib/fuzzy-words-search-for-paths'
import wordsBolderify from '../lib/words-bolderify'
import { getClassFromMime } from './File'
import debounce from '../lib/debounce'

// ------------------------------------------------------------------
// -- This module inserts in the Cozy Bar a launch input.
// -- autocomplete component : https://github.com/algolia/autocomplete.js
// -- filter and sort  :
// -- data : from pouchDB, synchronized with the server
// ------------------------------------------------------------------

// TODO :
// - test debounce is really working
// - update the list of files when pouchDB is updated
// - deal ellipsis in filename and path displayed in suggestions menu.
// - use a second dataset to add suggestions for applications
// - explore the suggestion formats of Cerebro (js launcher)

const LaunchBarCtrler = {}
const MAX_RESULTS = 15
let cozyClient
// let T0
// let T1
// let T2
// let T3
// let T4

LaunchBarCtrler.init = function(newCozyClient) {
  cozyClient = newCozyClient
  // ------------------------------------------------------------------
  // 1/ HTML insertion in the bar
  const launchInput = document.createElement('input')
  launchInput.setAttribute('id', `launch-bar-input`)
  launchInput.setAttribute('placeholder', 'Search')
  let target = document.querySelector('.coz-sep-flex')
  const launchBar = document.createElement('div')
  launchBar.setAttribute('id', 'launch-bar')
  launchBar.appendChild(launchInput)
  target.parentElement.insertBefore(launchBar, target)

  launchBar.addEventListener(
    'focusin',
    () => {
      launchBar.classList.add('focus-in')
      if (launchInput.previousValue) {
        autoComplete.setVal(launchInput.previousValue)
        launchInput.setSelectionRange(0, launchInput.value.length)
      }
    },
    true
  )

  launchBar.addEventListener(
    'focusout',
    function(event) {
      launchBar.classList.remove('focus-in')
      launchInput.previousValue = launchInput.value
      autoComplete.setVal('')
    },
    true
  )

  // ------------------------------------------------------------------
  // 2/ prepare the search function for autocomplete.js
  let currentQuery
  const launchSuggestions = function(query, cb) {
    currentQuery = query
    let T1 = performance.now()
    const results = fuzzyWordsSearch.search(query, MAX_RESULTS)
    let T2 = performance.now()
    console.log('search for "' + query + '" took ' + (T2 - T1) + 'ms')
    cb(results)
  }

  // ------------------------------------------------------------------
  // 3/ initialisation autocomplete
  const autoComplete = autocompleteAlgolia(
    '#launch-bar-input',
    { hint: true, openOnFocus: true, autoselect: true, debug: false },
    [
      {
        source: debounce(launchSuggestions, 150),
        displayKey: 'path',
        templates: {
          suggestion: function(suggestion) {
            let path = suggestion.path
            if (suggestion.path === '') {
              path = '/'
            }
            console.log('template')
            let html = `<div class="${getClassFromMime(
              suggestion
            )} ac-suggestion-img"></div><div><div class="ac-suggestion-name">${wordsBolderify(
              currentQuery,
              suggestion.name
            )}</div class="aa-text-container"><div class="ac-suggestion-path">${wordsBolderify(
              currentQuery,
              path
            )}</div></div>`
            return html
          }
        }
      }
    ]
  ).on('autocomplete:selected', function(event, suggestion, dataset) {
    // a suggestion has been clicked by the user : change the displayed directory
    let path = suggestion.path
    if (suggestion.type === 'directory') {
      path += '/' + suggestion.name
    }
    cozyClient.files
      .statByPath(path)
      .then(data => {
        window.location.href = '#/files/' + data._id
        launchInput.value = ''
      })
      .catch(() => {
        launchInput.value = ''
      })
    // }).on('autocomplete:open', function () {
    //   console.log("autocomplete:open");
    // }).on('autocomplete:shown', function () {
    //   console.log("autocomplete:shown");
    // }).on('autocomplete:empty', function () {
    //   console.log("autocomplete:empty");
    // }).on('autocomplete:closed', function () {
    //   console.log("autocomplete:closed");
    // }).on('autocomplete:updated', function () {
    //   console.log("autocomplete:updated");
  }).autocomplete

  // ------------------------------------------------------------------
  // 4/ DATA FOR PATHS SEARCH : replicate the file doctype and then
  // prepare the list of paths for the search.
  // let
  //   fileDB

  const list = []
  // const root = document.querySelector('[role=application]')
  // const data = root.dataset
  // const initialData = {
  //   cozyDomain: data.cozyDomain,
  //   cozyToken: data.cozyToken
  // }
  // window.PouchDB = PouchDB
  // window.pouchdbFind = pouchdbFind
  // cozyClient.init({
  //   cozyURL: '//' + data.cozyDomain,
  //   token: data.cozyToken
  // })
  //
  // const replicationOptions = {
  //   onError: () => { console.log('error during pouchDB replication') },
  //   onComplete: () => {
  //     const dirDictionnary = {}
  //     const fileList = []
  //     fileDB = cozyClient.offline.getDatabase('io.cozy.files')
  //     T1 = performance.now()
  //     console.log('first replication took "' + (T1 - T0) + 'ms')
  //     fileDB.allDocs({include_docs: true, descending: true}, function (e, docs) {
  //       T2 = performance.now()
  //       console.log('get all docs took "' + (T2 - T1) + 'ms')
  //       for (let row of docs.rows) {
  //         const doc = row.doc
  //         if (doc.type === 'file') {
  //           fileList.push(doc)
  //         } else if (doc.type === 'directory') {
  //           let fullPath = doc.path
  //           dirDictionnary[row.id] = fullPath
  //           if (fullPath.substring(0, 12) === '/.cozy_trash') {
  //             continue
  //           }
  //           // in couch, the path of a directory includes the directory name, what is
  //           // inconsistent with the file path wich doesn't include the filename.
  //           // Therefore we harmonize here by removing the dirname from the path.
  //           doc.path = fullPath.substring(0, fullPath.lastIndexOf('/'))
  //           list.push(doc)
  //         }
  //       }
  //       for (let file of fileList) {
  //         file.path = dirDictionnary[file.dir_id]
  //         if (file.path.substring(0, 12) !== '/.cozy_trash') {
  //           list.push(file)
  //         }
  //       }
  //       T3 = performance.now()
  //       console.log('prepare the file paths took "' + (T3 - T2) + 'ms')
  //       fuzzyWordsSearch.init(list)
  //       T4 = performance.now()
  //       console.log('init of the search took "' + (T4 - T3) + 'ms')
  //     })
  //   }
  // }
  //
  // T0 = performance.now()
  // cozyClient.offline.replicateFromCozy('io.cozy.files', replicationOptions)
  cozy.client.data.defineIndex('io.cozy.files', ['_id']).then(function(idx) {
    cozy.client.data
      .query(idx, { selector: { _id: { $gt: null } } })
      .then(function(files) {
        // T2 = performance.now()
        // console.log('get all docs took "' + (T2 - T1) + 'ms')
        const dirDictionnary = {}
        const fileList = []
        for (let doc of files) {
          // const doc = row.doc
          if (doc.type === 'file') {
            fileList.push(doc)
          } else if (doc.type === 'directory') {
            let fullPath = doc.path
            dirDictionnary[doc._id] = fullPath
            if (fullPath.substring(0, 12) === '/.cozy_trash') {
              continue
            }
            // in couch, the path of a directory includes the directory name, what is
            // inconsistent with the file path wich doesn't include the filename.
            // Therefore we harmonize here by removing the dirname from the path.
            doc.path = fullPath.substring(0, fullPath.lastIndexOf('/'))
            list.push(doc)
          }
        }
        for (let file of fileList) {
          file.path = dirDictionnary[file.dir_id]
          if (file.path && file.path.substring(0, 12) !== '/.cozy_trash') {
            list.push(file)
          }
        }
        // T3 = performance.now()
        // console.log('prepare the file paths took "' + (T3 - T2) + 'ms')
        fuzzyWordsSearch.init(list)
        // T4 = performance.now()
        // console.log('init of the search took "' + (T4 - T3) + 'ms')
      })
  })
}
export default LaunchBarCtrler
