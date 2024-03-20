module.exports = async function ($) {
  return /* HTML */ `<h1>Web components</h1>
    <h3>toggle</h3>
    <w-toggle>
      <button trigger>Show Content</button>
      <div content>
        <p>Hide and show content.</p>
      </div>
    </w-toggle>

    <h3>form with fields</h3>
    <form id="createproject" action="/project/create" onsubmit="return false">
      <w-field name="file" type="file"></w-field>
      <w-field name="file" type="file" progress></w-field>
      <w-field name="file" type="file" progress=".progress"></w-field>

      <w-field name="default"></w-field>
      <w-field name="text" type="text"></w-field>
      <w-field name="text" type="text" label="Custom label"></w-field>
      <w-field name="text" type="text" required></w-field>
      <w-field name="text" type="text" value="hello"></w-field>

      <w-field name="hidden" type="hidden"></w-field>

      <w-field name="email" type="email"></w-field>

      <w-field name="number" type="number"></w-field>

      <w-field name="textarea" type="textarea"></w-field>

      <w-field name="date" type="date"></w-field>

      <w-field name="color" type="color"></w-field>

      <w-field name="radio" type="radio">
        <label><input value="1" /> A</label>
        <label><input value="2" /> A</label>
        <label><input value="3" /> A</label>
      </w-field>

      <w-field name="checkbox" type="checkbox">
        <label><input value="1" /> A</label>
        <label><input value="2" /> A</label>
        <label><input value="3" /> A</label>
      </w-field>

      <w-field name="select" type="select">
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </w-field>

      <w-field name="select" type="select" multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </w-field>

      <w-submit>Save</w-submit>
    </form>`
}
