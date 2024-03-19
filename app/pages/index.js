module.exports = async function ($) {
  return /* HTML */ `<h1>Web components</h1>
    <h3>toggle</h3>
    <toggle>
      <button trigger>Show Content</button>
      <div content>
        <p>Hide and show content.</p>
      </div>
    </toggle>

    <h3>form with fields</h3>
    <form id="createproject" action="/project/create" onsubmit="return false">
      <upload name="file"></upload>
      <upload name="file" progress></upload>
      <upload name="file" progress=".progress"></upload>

      <field name="default"></field>
      <field name="text" type="text"></field>
      <field name="text" type="text" label="Custom label"></field>
      <field name="text" type="text" required></field>
      <field name="text" type="text" value="hello"></field>
      <field
        class="support"
        id="all"
        data-content="attributes"
        name="text"
        type="text"
        placeholder="hello"
      ></field>

      <field name="email" type="email"></field>

      <field name="number" type="number"></field>

      <field name="textarea" type="textarea"></field>

      <field name="date" type="date"></field>

      <field name="color" type="color"></field>

      <field name="radio" type="radio">
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </field>

      <field name="checkbox" type="checkbox">
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </field>

      <field name="select" type="select">
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </field>

      <field name="select" type="select" multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </field>

      <submit>Save</submit>
    </form>`
}
