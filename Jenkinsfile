pipeline
{
  agent any
  stages
  {
    stage('BUILD')
    {
     steps
     {
        sh "yarn install"
     }
    }
    stage('TESTS')
    {
      steps
      {
        sh "yarn test"
      }
    }
  }
}