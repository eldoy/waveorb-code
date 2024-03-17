class HTMLElement {}

module.exports = class ShowHide extends HTMLElement {
  /**
   * Instantiate the Web Component
   */
  constructor() {
    // Get parent class properties
    super()

    // Get the elements
    this.trigger = this.querySelector('[trigger]')
    this.content = this.querySelector('[content]')
    if (!this.trigger || !this.content) return

    // Setup default UI
    this.trigger.removeAttribute('hidden')
    this.trigger.setAttribute('aria-expanded', false)
    this.content.setAttribute('hidden', '')

    // Listen for click events
    this.trigger.addEventListener('click', this)
  }

  /**
   * Handle events in the Web Component
   * @param {Event} event The Event object
   */
  handleEvent(event) {
    // Don't let the button trigger other actions
    event.preventDefault()

    // If the content is expanded, hide it
    // Otherwise, show it
    if (this.trigger.getAttribute('aria-expanded') === 'true') {
      this.trigger.setAttribute('aria-expanded', false)
      this.content.setAttribute('hidden', '')
    } else {
      this.trigger.setAttribute('aria-expanded', true)
      this.content.removeAttribute('hidden')
    }
  }
}
