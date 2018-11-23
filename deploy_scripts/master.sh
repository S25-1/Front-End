cp ./firebase/master.json ../firebase.json
firebase deploy --only hosting:master-cgi --token ${FIREBASE_TOKEN}