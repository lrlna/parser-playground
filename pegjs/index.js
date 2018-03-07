var path = require('path')
var peg = require('pegjs')
var fs = require('fs')

var pegFile = fs.readFileSync(path.join(__dirname, './js.peg'))
var parser = peg.generate(pegFile.toString())

console.log(parser)

var output = parser.parse("db.collection('coll').find('butts')")

console.log(JSON.stringify(output, null, 2))
