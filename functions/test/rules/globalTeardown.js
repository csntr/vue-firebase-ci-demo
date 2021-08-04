const firebase = require('@firebase/rules-unit-testing');

const globalTeardown = async () => {
  await Promise.all(firebase.apps().map((app) => app.delete()));
};

module.exports = globalTeardown;
