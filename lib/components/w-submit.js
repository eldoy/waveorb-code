class HTMLElement {}

module.exports = class WSubmit extends HTMLElement {
  constructor() {
    super()

    this.outerHTML = `<p class="form-submit"><button>${this.innerHTML}</button></p>`
  }
}
