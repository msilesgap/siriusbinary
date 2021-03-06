// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// module.exports = (on, config) => {
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config
// }
const fs = require('fs')

module.exports = (on, config) => {
  on('task', {
    readFileMaybe (fileName) {
      if (fs.existsSync(fileName)) {
        return fs.readFileSync(fileName, 'utf8')
      }

      return null
    }
  })

  on('task', {
    readFileDelete ({ fileName, fileEncoding }) {
      if (fs.existsSync(fileName)) {
        var fileContent = fs.readFileSync(fileName, fileEncoding)
        fs.unlinkSync(fileName)
        return (fileContent)
      }

      return null
    }
  })

  on('task', {
    fileRename ({ fileName, newFileName }) {
      if (fs.existsSync(fileName)) {
        fs.renameSync(fileName, newFileName)
        return true
      }
      return false
    }
  })

  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-gpu');
      return launchOptions
    }
  })
}
