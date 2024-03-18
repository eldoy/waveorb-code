module.exports = async function ($) {
  return /* HTML */ `<h1>Web components</h1>
    <w-toggle>
      <button trigger>Show Content</button>
      <div content>
        <p>Hide and show content.</p>
      </div>
    </w-toggle>`
}
