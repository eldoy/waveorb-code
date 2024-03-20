// Components
var WField = require('./lib/components/w-field.js')
var WSubmit = require('./lib/components/w-submit.js')
var WToggle = require('./lib/components/w-toggle.js')

// Form
var handleClearErrors = require('./lib/form/handleClearErrors.js')
var handleFormOptions = require('./lib/form/handleFormOptions.js')
var handlePayload = require('./lib/form/handlePayload.js')
var handleQueryParams = require('./lib/form/handleQueryParams.js')
var handleRedirect = require('./lib/form/handleRedirect.js')
var handleShowErrors = require('./lib/form/handleShowErrors.js')
var handleSubmit = require('./lib/form/handleSubmit.js')
var handleUpload = require('./lib/form/handleUpload.js')
var handleUploadProgress = require('./lib/form/handleUploadProgress.js')
var handleUploadReset = require('./lib/form/handleUploadReset.js')
var renderUploadImage = require('./lib/form/renderUploadImage.js')

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
  // Components
  'w-field': WField,
  'w-submit': WSubmit,
  'w-toggle': WToggle,

  // Form
  handleClearErrors,
  handleFormOptions,
  handlePayload,
  handleQueryParams,
  handleRedirect,
  handleShowErrors,
  handleSubmit,

  handleUpload,
  handleUploadProgress,
  handleUploadReset,
  renderUploadImage,

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
