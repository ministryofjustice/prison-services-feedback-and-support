/* eslint-disable consistent-return */

const fs = require('fs')
const { dirname } = require('path')

function writeFile(path, contents, callback) {
  fs.mkdir(dirname(path), { recursive: true }, (err) => {
    if (err) return callback(err)

    fs.writeFile(path, contents, callback)
  })
}

module.exports.recordBuildInfoTo = (target, contents, callback) => {
  writeFile(target, JSON.stringify(contents, null, 2), callback)
}
