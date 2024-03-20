module.exports = function handleQueryParams(form) {
  var query = form.getAttribute('data-query') || ''
  if (query.startsWith('window.')) {
    var name = query.split('.')[1]
    query = window[name]
  } else {
    var names = query.split(' ').map((x) => x.trim())
    query = {}
    for (var name of names) {
      var [a, n] = name.split(':')
      if (a) {
        query[a] = window.params(n ? parseInt(n) : a)
      }
    }
  }
  return query
}
