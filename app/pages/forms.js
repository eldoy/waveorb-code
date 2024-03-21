module.exports = async function ($) {
  return /* HTML */ `<h1>Forms</h1>
    <h3>Normal form</h3>
    <form action="/project/create">
      <p>
        <label>
          Name<br />
          <input type="text" name="name" value="hello" />
        </label>
        <em></em>
      </p>
      <p>
        <button>Save</button>
      </p>
    </form>
    <script>
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
        }
      }

      window.form = new Form('form')
    </script> `
}
