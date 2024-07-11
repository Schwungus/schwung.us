pipeline {
    agent any

    stages {
        stage("Build") {
            steps {
                def files = 'index.html wavy.js index.css wavy.css sitemap.xml robots.txt assets/'
                sh 'rm -rf out && mkdir -p out'
                sh "cp -r ${files} out"
            }
        }

        stage("Deploy") {
            steps {
                def sitesDir = '/public/sites'
                def outDir = "${sitesDir}/schwungus.software"

                sh "mkdir -p ${sitesDir}"
                sh "rm -rf ${outDir}"
                sh "mv out ${outDir}"
            }
        }
    }
}
