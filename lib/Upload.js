module.exports = class Upload {
  constructor(upload) {
    if (typeof upload == 'string') upload = q(upload)

    console.log(upload)

    var input = q('[type="file"]', upload)
    var urlid = input.getAttribute('data-url')

    this.url = q(`#${urlid}`, upload)
    this.progress = q('.progress', upload)
    this.preview = q('.preview', upload)

    input.addEventListener('change', this.handleUpload)

    this.input = input
    console.log(this.input)
  }

  handleUpload = async (event) => {
    event.preventDefault()

    var action = input.getAttribute('data-action')
    var size = input.getAttribute('data-size')
    var name = input.getAttribute('data-name')
    var options = {
      files: input.files,
      progress: function (event) {
        window.handleUploadProgress(input, event)
      }
    }
    var result = await api(action, {}, options)
    if (!window.handleShowErrors(input.form, result)) {
      var file = result[0]
      q(`.${name}-file`).value = file.url
      html(`.${name}-image`, window.renderUploadImage(file, { size }))
    }
  }
}
