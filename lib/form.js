module.exports = class Form {
  constructor(form) {
    if (typeof form == 'string') {
      form = document.querySelector(form)
    }
    form.addEventListener('submit', this.handleSubmit)

    // Handle options
    this.options = {
      scroll: [null, 'true'].includes(form.getAttribute('data-scroll')),
      redirect: form.getAttribute('data-redirect') || 'back',
      message: form.getAttribute('data-message') || '',
      flash: {
        el: form.getAttribute('data-flash') || '#flash',
        time: form.getAttribute('data-time') || 5000,
        name: form.getAttribute('data-cookie') || 'flash'
      }
    }

    this.form = form

    var fields = form.querySelectorAll('[name]')
    for (var field of fields) {
      console.log(field.type)
      field.addEventListener('input', this.handleClearErrors)
    }
  }

  getQuery = (action) => {
    if (action[0] == '/') {
      action = 'thismessage:' + action
    }
    var url = new URL(action)
    var searchParams = new URLSearchParams(url.search)
    return Object.fromEntries(searchParams)
  }

  getPayload = (query, values) => {
    var payload = {}
    if (Object.keys(query).length) {
      payload.query = query
    }
    if (Object.keys(values).length) {
      payload.values = values
    }
    return payload
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    var button = event.submitter
    button.disabled = true

    var action = this.form.getAttribute('action')

    var query = this.getQuery(action)
    var values = serialize(this.form)

    var payload = this.getPayload(query, values)
    var result = await api(action, payload)

    button.disabled = false

    if (!this.handleShowErrors(result)) {
      this.handleRedirect()
    }
  }

  handleClearErrors = (event) => {
    var field = event.target

    var el = q(`.${field.name}-errors`, field.parentNode)
    if (el) text(el, '')
  }

  handleShowErrors = (result) => {
    if (!result.error) return

    qa('em', this.form, (el) => text(el, ''))

    flash(result.error.message, this.options.flash)
    for (var key in result) {
      if (key == 'error') continue
      for (var field in result[key]) {
        var em = q(`.${field}-errors`, this.form)
        var val = result[key][field][0]
        if (em && val) text(em, val)
      }
    }
    return true
  }

  handleRedirect = () => {
    var { message, redirect } = this.options
    if (redirect == 'none') {
      if (message) {
        flash(message, this.options.flash)
      }
    } else {
      if (!/https?:/.test(redirect)) {
        cookie('flash', message)
      }
      if (redirect == 'back') {
        window.back()
      } else if (redirect == 'reload') {
        window.location = window.location.href
      } else {
        window.location = redirect
      }
    }
  }
}
