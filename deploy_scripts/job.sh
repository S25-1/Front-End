cp ./deploy_scripts/firebase/job.json ./firebase.json
firebase deploy --only hosting:job-cgi --token ${FIREBASE_TOKEN}