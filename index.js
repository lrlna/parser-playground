var bsonCompiler = require('@mongodb-js/bson-compilers')
var html = require('choo/html')
var choo = require('choo')

var app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.route('/', function (state, emit) {
  return html`
    <body>
      ${bsonCompiler('(2 + 2) * 4')} 
    </body>
  `
})
