pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    environment {
        NEXT_TELEMETRY_DISABLED = '1'
        NEXT_PUBLIC_APP_ENV = 'qc'
    }

    stages {
        stage('Check Tooling') {
            steps {
                bat 'node --version'
                bat 'pnpm.cmd --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'pnpm.cmd install --frozen-lockfile'
            }
        }

        stage('Lint') {
            steps {
                bat 'pnpm.cmd run lint'
            }
        }

        stage('Test') {
            steps {
                bat 'pnpm.cmd run test'
            }
        }

        stage('Build QC') {
            steps {
                bat 'pnpm.cmd run build'
            }
        }

        stage('Archive Artifact') {
            steps {
                archiveArtifacts artifacts: '.next/standalone/**, .next/static/**, public/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'QC build succeeded.'
        }

        failure {
            echo 'QC build failed.'
        }
    }
}
