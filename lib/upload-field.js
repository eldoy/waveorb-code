class HTMLElement {}

module.exports = class UploadField extends HTMLElement {
  constructor() {
    super()

    this.outerHTML = `<div class="upload-field"></div>`
  }
}
