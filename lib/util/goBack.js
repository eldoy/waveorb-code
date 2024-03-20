module.exports = function goBack() {
  history.go(-(store('root') || 1))
}
