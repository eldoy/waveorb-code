module.exports = function sleep(s = 0.5) {
  return new Promise((r) => setTimeout(r, s * 1000))
}
