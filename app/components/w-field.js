class HTMLElement {}

module.exports = class WField extends HTMLElement {
  buttonTypes = ['checkbox', 'radio']

  escape(key) {
    if (typeof window.esc == 'function' && this.atts[key]) {
      this.atts[key] = window.esc(this.atts[key])
    }
  }

  title(str = '') {
    return (str[0] || '').toUpperCase() + str.slice(1)
  }

  constructor() {
    super()

    this.atts = {}
    for (var node of [...this.attributes]) {
      this.atts[node.nodeName] = node.nodeValue
    }

    this.escape('name')
    this.escape('value')
    this.escape('label')
    this.escape('placeholder')

    if (typeof this.atts.label == 'undefined') {
      this.atts.label = this.title(this.atts.name)
    }

    var n = Math.random().toString(36).replace('0.', '')
    this.identifier = `field_${n}`

    this.outerHTML = `<p class="form-field">${this.fields()}${this.em()}</p>`
  }

  fields() {
    var { type, name, placeholder, label = '', value = '' } = this.atts

    if (this.buttonTypes.includes(type)) {
      this.querySelectorAll('input').forEach(function (el) {
        el.setAttribute('name', name)
        el.setAttribute('type', type)
      })
    }

    if (type == 'select') {
      return this.label(
        `<select id="${this.identifier}" name=${name}>${this.innerHTML}</select>`
      )
    }

    if (type == 'checkbox') {
      return `<fieldset id="${this.identifier}"><legend>${this.title(
        name
      )}</legend>${this.innerHTML}</fieldset>`
    }

    if (type == 'radio') {
      return `<fieldset id="${this.identifier}"><legend>${this.title(
        name
      )}</legend>${this.innerHTML}</fieldset>`
    }

    if (type == 'textarea') {
      return this.label(
        `<textarea id="${this.identifier}" name="${name}" placeholder="${
          placeholder || ''
        }">${value || ''}</textarea>`
      )
    }

    return this.label(
      `<input id="${this.identifier}" type="${
        type || 'text'
      }" name="${name}" value="${value || ''}" placholder="${
        placeholder || ''
      }">`
    )
  }

  label(content) {
    if (!this.atts.label) {
      return content
    }
    return `<label for="${this.identifier}">${this.atts.label}</label><br>${content}`
  }

  em() {
    return `<em class="${this.atts.name}-errors"></em>`
  }
}
