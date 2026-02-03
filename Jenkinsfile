pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "devops-backend:latest"
        FRONTEND_IMAGE = "devops-frontend:latest"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/<your-username>/devops-auth-app.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t $BACKEND_IMAGE .'
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t $FRONTEND_IMAGE .'
                }
            }
        }

        stage('Image Verification') {
            steps {
                sh 'docker images'
            }
        }

        // OPTIONAL DEPLOYMENT
        stage('Deploy (Docker)') {
            when {
                expression { return false }   // disable for now
            }
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        success {
            echo '✅ Build completed successfully'
        }
        failure {
            echo '❌ Build failed'
        }
    }
}
