pipeline
{
  agent {
    docker {
      image "wendreof/node-wd"
      args "--network=skynet"
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
