


export function cli(args) {
    // install/ copy directories
    if (args[2] === 'install') {
        const fs = require('fs')
        const path = require('path')
        const ncp = require('ncp').ncp // Asynchronous recursive file & directory copying

        if (fs.existsSync(path.dirname('/project'))) {
            ncp.limit = 16
            ncp('./node_modules/@nera-npm/nera/src/project', '.', error => {
                if (error) {
                    return console.log(error)
                }

                console.log('Project installed')
            })
        } else {
            console.log('Installation failed')
        }

    }

    // render pages
    if (args[2] === 'render') {
        const run = require('./index')

        run()
    }

    // start dev server
    if (args[2] === 'serve') {
        const bs = require('browser-sync').create()

        bs.watch('.').on('change', bs.reload)
        bs.init({
            server: './public'
        })
    }

    // watch files
    if (args[2] === 'watch') {
        const nodemon = require('nodemon')

        nodemon({
            script: './node_modules/@nera-npm/nera/index.js',
            ext: 'js,md,pug,yaml,css',
            ignore: 'public/'
        })
    }
}
