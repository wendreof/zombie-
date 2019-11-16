pipeline
{
  agent any

  stages{

    stage('BUILD'){
     steps{
        sh "npm install"
     }
    }
    
    stage('TESTS'){
      steps{
        sh "npm test"
      }
    }

  }

}