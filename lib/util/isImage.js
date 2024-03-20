module.exports = function isImage(name) {
  return /\.(gif|jpe?g|tiff|png|bmp|svg)$/i.test(name)
}
