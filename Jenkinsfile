pipeline {
    agent {node {label 'master'}}
	
    stages {
		stage ('Run Tests') {
			steps {
				bat 'npm install'
				bat """npm run cypress -- --config baseUrl=${params.BaseUrl} --env ADMIN_USER=${params.UserName},ADMIN_PASS=${params.Password} --browser chrome --headless --reporter mocha-multi-reporters --reporter-options configFile=reporters.json"""
			}

		}
    }
}
