pipeline {
    agent {
            reuseNode true
            docker  {image 'registry-internal.do.unive.nl/devops/build-agent-ng:1.10.0'
            args '-u "root"  --label io.rancher.container.network=true'
                    }
          }
    stages {
        stage('build') {
            steps {
                  sh 'rm -rf ./node_modules/*'
                  sh 'npm -version'
                  sh 'npm config set registry=http://nexus.devops-tools.rancher.internal:8081/repository/npm-unive-group/'
                  sh 'npm config set proxy http://10.30.4.157:3128'
                  sh dir ('/var/jenkins_home/workspace/test') {
                    sh 'npm --version'
                }
            }
        }
    }
}
