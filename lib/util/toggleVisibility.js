module.exports = function toggleVisibility(options = {}, fn) {
  var pub = options.pub || 'public'
  var priv = options.priv || 'private'
  var selector = '.' + pub + ',.' + priv
  var session = cookie(options.cookie || 'session')
  var toggle =
    fn ||
    function (el) {
      var isPublic = el.classList.contains(pub)
      var isPrivate = el.classList.contains(priv)
      if ((session && isPublic) || (!session && isPrivate)) {
        el.style.display = 'none'
      }
    }
  document.querySelectorAll(selector).forEach(toggle)
}
