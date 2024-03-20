module.exports = function handleCloseMenus(event) {
  event.stopPropagation()
  var el = event.target,
    toggle
  while (el) {
    if (el.classList.contains('open')) return
    var menu = el.getAttribute('data-toggle')
    if (menu) {
      toggle = q(menu)
      break
    }
    el = el.parentElement
  }
  qa('.open', (item) => {
    if (item != toggle) {
      item.classList.remove('open')
    }
  })
}
