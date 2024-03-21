module.exports = class Form {
  constructor(form) {
    if (typeof form == 'string') {
      form = document.querySelector(form)
    }
    form.addEventListener('submit', this.handleSubmit)

    this.form = form

    // var inputs = form.querySelectorAll('input,textarea')
    // for (var input of inputs) {
    //   input.addEventListener('change', this.handleClearErrors)
    // }
  }

  // handleClearErrors = (event) => {
  //   console.log('Clearing errors')
  // }

  handleSubmit = async (event) => {
    event.preventDefault()

    console.log('Submitting')

    console.log(this.form)

    var action = this.form.getAttribute('action')

    console.log(action)

    var query = this.getQuery(action)
    var values = serialize(this.form)

    console.log(query)
    console.log(values)

    var payload = this.getPayload(query, values)
    var result = await api(action, payload)

    console.log({ result })
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
}
