module.exports = function clearErrors(field) {
  var el = q(`.${field.name}-errors`, field.parentNode)
  if (!el) return
  el.style.opacity = 0
  setTimeout(function () {
    text(el, '')
    el.style.opacity = 1
  }, 210)
}
