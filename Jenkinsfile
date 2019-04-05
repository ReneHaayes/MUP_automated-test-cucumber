pipeline {
    agent {
            docker  {
            image 'registry-internal.do.unive.nl/devops/build-agent-ng:1.10.0'
            reuseNode true
            args '-u "root"  --label io.rancher.container.network=true'
                    }
          }
    stages {
        stage('build') {
            steps {
                  sh 'cd test && npm install'

            }
        }
    }
}
