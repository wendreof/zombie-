pipeline {
  agent any
  stages {
    stage('BUILD'){
     steps {
        sh "yarn install"
     }

    }
    stage('TESTS'){3
      steps {
        sh "yarn test"
      }
    }
  }
}