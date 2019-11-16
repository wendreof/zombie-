pipeline
{
  agent {
    docker {
      image "wendreof/node-wd"
    }
  }

  stages{

    stage('BUILD'){
     steps{
        sh "npm install"
     }
    }

    stage('TESTS'){
      steps{
        sh "npm run test:headless"
      }
    }

  }

}
