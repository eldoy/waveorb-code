module.exports = function handleToggleMenu() {
  q('#main-menu', (el) => el.classList.toggle('open'))
}
