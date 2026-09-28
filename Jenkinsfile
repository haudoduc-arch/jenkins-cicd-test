pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    environment {
        CI = 'true'
        NEXT_TELEMETRY_DISABLED = '1'
        NEXT_PUBLIC_APP_ENV = 'qc'
        PNPM_CMD = '.jenkins-tools\\node_modules\\.bin\\pnpm.cmd'
    }

    stages {
        stage('Check Tooling') {
            steps {
                bat 'node --version'
                bat 'npm.cmd --version'
            }
        }

        stage('Bootstrap pnpm') {
            steps {
                bat 'npm.cmd install --prefix .jenkins-tools --no-save --no-package-lock pnpm@10.17.1'
                bat 'call "%PNPM_CMD%" --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'call "%PNPM_CMD%" install --frozen-lockfile'
            }
        }

        stage('Lint') {
            steps {
                bat 'call "%PNPM_CMD%" run lint'
            }
        }

        stage('Test') {
            steps {
                bat 'call "%PNPM_CMD%" run test'
            }
        }

        stage('Build QC') {
            steps {
                bat 'call "%PNPM_CMD%" run build'
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
