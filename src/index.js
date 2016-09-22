import appTemplate from './templates/app.hbs'

document.addEventListener('DOMContentLoaded', function () {
  const wombles = getWombles()
  renderPage(wombles)
})

function renderPage (wombles) {
  const vm = {
    wombles: wombles
  }
  const div = document.getElementById('app')
  div.innerHTML = appTemplate(vm)
}

function getWombles () {
  return [
    { name: 'Orinocco', email: 'orinocco@wimbledoncommon.net' },
    { name: 'Tomsk', email: 'tomsk@wimbledoncommon.net' },
    { name: 'Bungo', email: 'bungo@wimbledoncommon.net' }
  ]
}
