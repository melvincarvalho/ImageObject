
// IMPORTS
import { render, html } from '../js/preacthtm.js'
import '../js/dior.js'
import '../js/nostrefresh.js'

// COMPONENTS
function Image(props) {
  return html`
    <div
      class="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer"
    >
      <img class="h-200" src="${props.image}" />
      <p class="text-xl font-medium text-slate-700 mt-3">
        <a href="${props.image}" target="_blank" >link 🔗</a>
      </p>
    </div>
  `
}

// MAIN

console.log(di.data)

const deleted = ['https://i.redd.it/xp7jut5j01c91.jpg', 'https://i.redd.it/qv4ajav1wrc91.jpg']

render(
  html`
    <div
      class="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10"
      style="background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png') ;"
    >
    <b>Marked Images</b>

      <div
        class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border "
      >
        ${di.data.reverse().filter(i => !deleted.includes(i)).map(i => {
    return html`
            <${Image} loading="lazy" image="${i}" />
          `
  })}
      </div>
    </div>
  `, document.body)
