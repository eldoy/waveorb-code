module.exports = function truncate(str = '', size = 32) {
  return str.length > size ? str.substring(0, size).trim() + ' ...' : str
}
