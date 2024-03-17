module.exports = async function ($) {
  return /* HTML */ `<h1>Web components</h1>
    <show-hide>
      <button trigger hidden>Show Content</button>

      <div content>
        <p>Now you see me, now you don't!</p>
      </div>
    </show-hide> `
}
