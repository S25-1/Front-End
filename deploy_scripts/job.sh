#!/bin/bash

cp -v ${TRAVIS_BUILD_DIR}/deploy_scripts/firebase/job.json ${TRAVIS_BUILD_DIR}/firebase.json
cd ${TRAVIS_BUILD_DIR}
firebase deploy --only hosting:job-cgi --token ${FIREBASE_TOKEN}