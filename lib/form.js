class Form {
  constructor(form) {
    if (typeof form == 'string') {
      form = document.querySelector(form)
    }

    form.addEventListener('submit', this.handleSubmit)

    this.form = form
  }

  handleSubmit(event) {
    event.preventDefault()

    console.log('Submitting')

    // How to handle query?

    var values = serialize(this.form)
  }
}
