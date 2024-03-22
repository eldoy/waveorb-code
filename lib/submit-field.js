class HTMLElement {}

module.exports = class SubmitField extends HTMLElement {
  constructor() {
    super()

    this.outerHTML = `<p class="submit-field"><button>${this.innerHTML}</button></p>`
  }
}
