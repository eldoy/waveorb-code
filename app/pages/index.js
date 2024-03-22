module.exports = async function ($) {
  return /* HTML */ `<h1>Web components</h1>
    <h3>toggle</h3>
    <hide-show>
      <button trigger>Show Content</button>
      <div content hidden>
        <p>Hide and show content.</p>
      </div>
    </hide-show>

    <h3>form with fields</h3>
    <form id="createproject" action="/project/create" onsubmit="return false">
      <input-field name="file" type="file"></input-field>
      <input-field name="file" type="file" progress></input-field>
      <input-field name="file" type="file" progress=".progress"></input-field>

      <input-field name="default"></input-field>
      <input-field name="text" type="text"></input-field>
      <input-field name="text" type="text" label="Custom label"></input-field>
      <input-field name="text" type="text" required></input-field>
      <input-field name="text" type="text" value="hello"></input-field>

      <input-field name="hidden" type="hidden"></input-field>

      <input-field name="email" type="email"></input-field>

      <input-field name="number" type="number"></input-field>

      <input-field name="textarea" type="textarea"></input-field>

      <input-field name="date" type="date"></input-field>

      <input-field name="color" type="color"></input-field>

      <input-field name="radio" type="radio">
        <label><input value="1" /> A</label>
        <label><input value="2" /> A</label>
        <label><input value="3" /> A</label>
      </input-field>

      <input-field name="checkbox" type="checkbox">
        <label><input value="1" /> A</label>
        <label><input value="2" /> A</label>
        <label><input value="3" /> A</label>
      </input-field>

      <input-field name="select" type="select">
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </input-field>

      <input-field name="select" type="select" multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </input-field>

      <submit-field>Save</submit-field>
    </form>`
}
