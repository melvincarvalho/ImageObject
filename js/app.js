
// IMPORTS
import { render, html } from '../js/preacthtm.js'
import '../js/dior.js'
import '../js/nostrefresh.js'

// COMPONENTS
import Navbar from '../components/Navbar.js'
import Bookmarks from '../components/Bookmarks.js'

// INIT
var doc = di.data
var bookmarks = doc.bookmark

// RENDER
render(
  html`
          <${Navbar} title="Images" />



          <${Bookmarks} bookmarks="${di.data.reverse()}" />
        `,
  document.body
)

console.log(doc)
