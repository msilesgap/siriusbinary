pipeline {
    agent {node {label 'master'}}
	
    stages {
		stage ('Run API Tests') {
			steps {
				sh 'newman run "https://api.getpostman.com/collections/1204567-e9b31548-b76f-416c-93e6-a47a15741532?apikey=PMAK-60e7c88b2778e60038006cbc-400ee2f94c05085cbb6bf4dce14bbfb3d4"'
			}
		}
		stage ('Run Smoke Test Tests') {
			steps {
				sh 'echo "Running Smoke Tests"'
			}
		}
		stage ('Run Functionality Tests') {
			steps {
				sh 'npm install'
				//sh 'browserstack-cypress run --sync -b ${BUILD_DISPLAY_NAME} --env ADMIN_USER=automation,ADMIN_PASS=automation'
				//sh 'browserstack-cypress generate-report ${BUILD_ID}'
			}
		}
    }
}
