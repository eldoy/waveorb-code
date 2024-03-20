// Components
var WToggle = require('./lib/functions/w-toggle.js')
var WField = require('./lib/functions/w-field.js')
var wSubmit = require('./lib/functions/w-submit.js')

// Functions
var handleLogout = require('./lib/functions/handleLogout.js')
var handleToggleMenu = require('./lib/functions/handleToggleMenu.js')
var handleCloseMenus = require('./lib/functions/handleCloseMenus.js')
var handleClearErrors = require('./lib/functions/handleClearErrors.js')
var handleFormOptions = require('./lib/functions/handleFormOptions.js')
var handleQueryParams = require('./lib/functions/handleQueryParams.js')
var handleRedirect = require('./lib/functions/handleRedirect.js')
var handlePayload = require('./lib/functions/handlePayload.js')
var handleSubmit = require('./lib/functions/handleSubmit.js')
var handleShowErrors = require('./lib/functions/handleShowErrors.js')
var handleUpload = require('./lib/functions/handleUpload.js')
var handleUploadProgress = require('./lib/functions/handleUploadProgress.js')
var handleUploadReset = require('./lib/functions/handleUploadReset.js')
var renderUploadImage = require('./lib/functions/renderUploadImage.js')

// Util
var load = require('./lib/util/load.js')
var sleep = require('./lib/util/sleep.js')
var clearErrors = require('./lib/util/clearErrors.js')
var showErrors = require('./lib/util/showErrors.js')
var goBack = require('./lib/util/goBack.js')
var navCount = require('./lib/util/navCount.js')
var isImage = require('./lib/util/isImage.js')
var closeWindow = require('./lib/util/closeWindow.js')
var truncate = require('./lib/util/truncate.js')
var toggleVisibility = require('./lib/util/toggleVisibility.js')
var setActiveLink = require('./lib/util/setActiveLink.js')

module.exports = {
  // Components
  'w-toggle': WToggle,
  'w-field': WField,
  'w-submit': WSubmit,

  // Util
  load,
  sleep,
  clearErrors,
  showErrors,
  goBack,
  navCount,
  isImage,
  closeWindow,
  truncate,
  toggleVisibility,
  setActiveLink,

  // Functions
  handleLogout,
  handleToggleMenu,
  handleCloseMenus,
  handleClearErrors,
  handleFormOptions,
  handleQueryParams,
  handleRedirect,
  handlePayload,
  handleSubmit,
  handleShowErrors,
  handleUpload,
  handleUploadProgress,
  handleUploadReset,
  renderUploadImage
}
