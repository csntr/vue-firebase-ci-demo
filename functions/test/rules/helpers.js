const firebase = require('@firebase/rules-unit-testing');
const { readFileSync } = require('fs');
const path = require('path');

const { loadFirestoreRules, initializeTestApp, clearFirestoreData } = firebase;

module.exports.setup = async (auth, data) => {
  const projectId = 'test-app';
  const app = initializeTestApp({
    projectId,
    auth
  });

  const db = app.firestore();

  // Write mock documents before rules
  if (data) {
    // const admin = initializeAdminApp({
    //   projectId
    // });

    for (const key in data) {
      const ref = db.doc(key);
      await ref.set(data[key]);
    }
  }

  // Apply rules
  await loadFirestoreRules({
    projectId,
    rules: readFileSync(path.resolve('../firestore.rules'), 'utf8')
  });

  return db;
};

module.exports.teardown = async () => {
  await Promise.all(
    firebase.apps().map((app) => {
      app.delete();
    })
  );
  await clearFirestoreData({ projectId: 'test-app' });
};
