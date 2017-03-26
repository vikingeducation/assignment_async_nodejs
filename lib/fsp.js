const fs = require('fs')

const fsp = {
    readFile: (path) => {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    },
    writeFile: (path, data) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, data, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('It\'s saved!')
                }
            })
        })
    },
    appendFile: (path, data) => {
        return new Promise((resolve, reject) => {
            fs.appendFile(path, data, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('The data was appeneded to the file!')
                }
            })
        })
    }
}

module.exports = fsp