pipeline {
    agent {node {label 'master'}}
	
    stages {
		stage ('Run Functionality Tests') {
			steps {
				sh 'npm install'
				sh 'browserstack-cypress run --sync -b ${BUILD_DISPLAY_NAME} --env ADMIN_USER=automation,ADMIN_PASS=automation'
				sh 'browserstack-cypress generate-report ${BUILD_ID}'				
			}

		}
    }
}
