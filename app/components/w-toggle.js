class HTMLElement {}

module.exports = class WToggle extends HTMLElement {
  constructor() {
    super()
    this.trigger = this.querySelector('[trigger]')
    this.content = this.querySelector('[content]')

    if (!this.trigger || !this.content) return

    this.content.setAttribute('hidden', '')
    this.trigger.addEventListener('click', this)
  }

  handleEvent(event) {
    event.preventDefault()

    this.content.toggleAttribute('hidden')
  }
}
