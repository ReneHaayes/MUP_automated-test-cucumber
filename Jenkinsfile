pipeline {
    agent {
            docker  {image 'registry-internal.do.unive.nl/devops/build-agent-ng:1.10.0'
            args '-u "root"  --label io.rancher.container.network=true'
                    }
          }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                dir('git@code.do.unive.nl:test/automated-test-cucumber.git/test') {
                    sh 'npm --version'
                }
            }
        }
    }
}
