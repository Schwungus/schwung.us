pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                sh "rm -rf out && mkdir -p out"
                sh "cp -r index.html wavy.js index.css wavy.css sitemap.xml robots.txt assets/ out"
            }
        }

        stage("Deploy") {
            steps {
                sh "mkdir -p /public/sites"
                sh "rm -rf /public/sites/schwungus.software"
                sh "mv out /public/sites/schwungus.software"
            }
        }
    }
}
