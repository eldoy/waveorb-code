module.exports = function track() {
  var t = store('track') || []
  var path = location.pathname + location.search
  if (t[t.length - 1] != path) {
    t.push(path)
    t = t.slice(-100)
  }
  return store('track', t)
}
