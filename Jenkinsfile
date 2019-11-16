pipeline {
  agent any
  stages {
    stage('BUILD'){
      sh "yarn install"
    }
    stage('TESTS'){
      sh "yarn test"
    }
  }
}