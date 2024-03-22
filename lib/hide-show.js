class HTMLElement {}

module.exports = class HideShow extends HTMLElement {
  constructor() {
    super()
    this.trigger = this.querySelector('[trigger]')
    this.content = this.querySelector('[content]')

    if (!this.trigger || !this.content) return

    this.trigger.addEventListener('click', this)
  }

  handleEvent(event) {
    event.preventDefault()

    this.content.toggleAttribute('hidden')
  }
}
