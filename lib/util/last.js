module.exports = function last() {
  var t = store('track') || []
  return t[t.length - 2] || ''
}
