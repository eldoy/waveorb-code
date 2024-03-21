module.exports = function back() {
  var t = store('track') || []
  var path = t[t.length - 2]
  if (path) {
    return (location = path)
  }
  history.go(-1)
}
