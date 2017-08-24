node('nodejs') {

    def test_port = 4200 + env.BUILD_ID.toInteger()

    def array = env.JOB_NAME.split("/")
    def pipelineName = array[array.length - 2];

    try {
        stage("Checkout"){
            if (env.BRANCH_NAME == 'master') {
                checkout scm
            } else {
                print "Checkout branch : ${env.BRANCH_NAME} and merge to master"
                checkout scm
                sh "git checkout master"
                print "Create new branch : master-${env.BRANCH_NAME}"
                sh "git branch master-${env.BRANCH_NAME}"
                print "Checkout branch : master-${env.BRANCH_NAME}"
                sh "git checkout master-${env.BRANCH_NAME}"
                print "Merging feature branch : ${env.BRANCH_NAME}"
                sh "git merge origin/${env.BRANCH_NAME}"
            }
        }

        stage("Install Dependencies"){
            sh 'npm install'
        }

        stage("Build"){
            sh 'npm run build'
        }
/*
        stage("Test Pre Deploy"){
            sh 'npm run test:pre-deploy'

            step([$class: 'XUnitBuilder',
                thresholds: [[$class: 'FailedThreshold', unstableThreshold: '1']],
                tools: [[$class: 'JUnitType', pattern: 'test-report/test-pre-deploy-report.xml']]])
        }
*/
        stage('Build Docker Image') {
            sh "sudo docker build -t 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:${env.BUILD_ID} -t 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:latest ."
        }

        stage('Push to Docker Resgistry') {
            sh "sudo docker push 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:${env.BUILD_ID}"
            sh "sudo docker push 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:latest"
        }

        stage ('Deploy and Run') {
            if (env.BRANCH_NAME == 'master') {
                print "Deploy docker container to : staging environmet"
                sh "ansible-playbook /vagrant/ansible/${pipelineName}-staging.yml -i /vagrant/ansible/hosts/staging --extra-vars 'branch=${env.BRANCH_NAME}'"
            } else {
                print "Deploy docker container to : testing environmet"
                sh "ansible-playbook /vagrant/ansible/${pipelineName}-testing.yml -i /vagrant/ansible/hosts/testing --extra-vars 'branch=${env.BRANCH_NAME} port=${test_port}'"
            }
        }
/*
        stage('Test post-deploy') {
            def test_url = ''
            if (env.BRANCH_NAME == 'master') {
                test_url = 'http://192.168.50.93:4200'
            } else {
                test_url = 'http://192.168.50.92:' + test_port
            }
            print "npm config set ${pipelineName}:test_url=${test_url}"
            sh "npm config set ${pipelineName}:test_url=${test_url}"
            sh 'npm run test:post-deploy'

            step([$class: 'XUnitBuilder',
                thresholds: [[$class: 'FailedThreshold', unstableThreshold: '1']],
                tools: [[$class: 'JUnitType', pattern: 'test-report/test-pre-deploy-report.xml']]])
        }
*/
        stage('Cleanup') {
            if (env.BRANCH_NAME != 'master') {
                sh "git checkout master"
                sh "git branch -D master-${env.BRANCH_NAME}"
            }

            /* sh "npm config delete ${pipelineName}:test_url" */
            /* sh "rm node_modules -rf" */

            sh "sudo docker rmi 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:${env.BUILD_ID}"
            sh "sudo docker rmi 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:latest"

        }

        if (env.BRANCH_NAME != 'master') {
            properties([pipelineTriggers([upstream(threshold: hudson.model.Result.SUCCESS, upstreamProjects: '${pipelineName}/master')])])
        }
    } catch (err){
        if (env.BRANCH_NAME != 'master') {
            sh "git checkout master"
            sh "git branch -D master-${env.BRANCH_NAME}"
        }

        /* sh "npm config delete ${pipelineName}:test_url" */
        /* sh "rm node_modules -rf" */

        sh "sudo docker rmi 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:${env.BUILD_ID}"
        sh "sudo docker rmi 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:latest"

        throw err
    }
}
