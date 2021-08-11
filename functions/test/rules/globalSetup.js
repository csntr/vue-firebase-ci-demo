const firebase = require('@firebase/rules-unit-testing')
const { discoverEmulators } = firebase

const globalSetup = async () => {
  const emulatorSettings = await discoverEmulators()
  firebase.useEmulators(emulatorSettings)
}

module.exports = globalSetup
