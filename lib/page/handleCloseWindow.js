module.exports = function closeWindow(e) {
  if (e.code == 'Escape') {
    goBack()
  }
}
