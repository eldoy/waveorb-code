// Form
var Form = require('./lib/Form.js')

// Components
var HideShow = require('./lib/components/hide-show.js')
var InputField = require('./lib/components/input-field.js')
var SubmitField = require('./lib/components/submit-field.js')

// Page
var handleCloseMenus = require('./lib/page/handleCloseMenus.js')
var handleCloseWindow = require('./lib/page/handleCloseWindow.js')
var handleLogout = require('./lib/page/handleLogout.js')
var handleToggleMenu = require('./lib/page/handleToggleMenu.js')

// Util
var goBack = require('./lib/util/goBack.js')
var isImage = require('./lib/util/isImage.js')
var load = require('./lib/util/load.js')
var navCount = require('./lib/util/navCount.js')
var setActiveLink = require('./lib/util/setActiveLink.js')
var sleep = require('./lib/util/sleep.js')
var toggleVisibility = require('./lib/util/toggleVisibility.js')
var truncate = require('./lib/util/truncate.js')

module.exports = {
  // Form
  Form,

  // Components
  'hide-show': HideShow,
  'input-field': InputField,
  'submit-field': SubmitField,

  // Page
  handleCloseMenus,
  handleCloseWindow,
  handleLogout,
  handleToggleMenu,

  // Util
  goBack,
  isImage,
  load,
  navCount,
  setActiveLink,
  sleep,
  toggleVisibility,
  truncate
}
