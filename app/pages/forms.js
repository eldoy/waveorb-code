var Form = require(process.cwd() + '/lib/Form.js')

module.exports = async function ($) {
  return /* HTML */ `<h1>Forms</h1>
    <h3>Normal form</h3>
    <form action="/project/create?id=5">
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
      ${Form}
      window.form = new Form('form')
    </script> `
}
