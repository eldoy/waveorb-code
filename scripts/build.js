#!/usr/bin/env node
const fs = require('fs')
const uglify = require('uglify-js')
const wcode = require('../index.js')

const code = []
for (const fn in wcode) {
  code.push(`window.${fn} = ${wcode[fn].toString()}\n`)
}
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist')
}

fs.writeFileSync('./dist/wcode.js', code.join('\n'))

const result = uglify.minify(code.join('\n'))
fs.writeFileSync('./dist/wcode-min.js', result.code)
